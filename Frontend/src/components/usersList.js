import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, CircularProgress } from '@mui/material';
import useFriends from '../hooks/useFriends';
import useAuth from '../hooks/useAuth';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState({});
  const { sendFriendRequest, fetchFriendRequests, fetchFriends } = useFriends();
  const { user } = useAuth();
  const api = "http://localhost:8080";

  const currentUser = user;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${api}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error("Erro ao listar usuários");
        }
      } catch (error) {
        console.error(error);
        setError("Erro ao listar usuários: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFriendRequests();
        if (data && Array.isArray(data)) {
          const pendingIds = data.map(request => {
            if (request.user.id === currentUser.id || request.friend.id === currentUser.id) {
              return request.user.id === currentUser.id ? request.friend.id : request.user.id;
            }
            return null;
          }).filter(id => id !== null);

          setPendingRequests(pendingIds);
        } else {
          throw new Error("Resposta da API não possui o formato esperado");
        }
      } catch (error) {
        console.error("Erro ao buscar pedidos de amizade:", error);
        setError("Erro ao buscar pedidos de amizade: " + error.message);
      }
    };

    fetchData();
  }, [currentUser.id]);

  useEffect(() => {
    const fetchFriendsList = async () => {
      try {
        const data = await fetchFriends();
        if (data && Array.isArray(data)) {
          setFriends(data);
        } else {
          throw new Error("Resposta da API não possui o formato esperado");
        }
      } catch (error) {
        console.error("Erro ao buscar lista de amigos:", error);
        setError("Erro ao buscar lista de amigos: " + error.message);
      }
    };

    fetchFriendsList();
  }, []);

  const handleSendFriendRequest = async (userId) => {
    try {
      setRequestStatus(prevStatus => ({ ...prevStatus, [userId]: 'loading' }));
      await sendFriendRequest(userId);
      const updatedRequests = await fetchFriendRequests();
      if (updatedRequests && Array.isArray(updatedRequests)) {
        const pendingIds = updatedRequests.map(request => {
          if (request.user.id === currentUser.id || request.friend.id === currentUser.id) {
            return request.user.id === currentUser.id ? request.friend.id : request.user.id;
          }
          return null;
        }).filter(id => id !== null);
        setPendingRequests(pendingIds);
      }
      setRequestStatus(prevStatus => ({ ...prevStatus, [userId]: 'success' }));
    } catch (error) {
      console.error("Erro ao enviar pedido de amizade:", error);
      setRequestStatus(prevStatus => ({ ...prevStatus, [userId]: 'error' }));
      if (error.response && error.response.status === 500) {
        setError("Erro interno ao enviar pedido de amizade. Tente novamente mais tarde.");
      } else if (error.response && error.response.status === 400 && error.response.data && error.response.data.message === "Já existe um pedido de amizade pendente entre os usuários.") {
        setError("Já existe um pedido de amizade pendente entre os usuários.");
      } else {
        setError("Erro ao enviar pedido de amizade. Tente novamente mais tarde.");
      }
    }
  };

  const isRequestPending = (userId) => {
    return pendingRequests.includes(userId);
  };

  const isFriend = (userId) => {
    return friends.some(friendship => friendship.user.id === userId || friendship.friend.id === userId);
  };

  if (loading) {
    return <Typography variant="h6" mt={2}>Carregando...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={2} sx={{justifyContent: 'center', maxHeight: '48vh', overflowY: 'scroll', }}>
      {users.length === 0 ? (
        <Typography variant="h6">Nenhum usuário encontrado.</Typography>
      ) : (
        users.map((user) => (
          <Grid item key={user.id} xs={12}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Avatar src={user.avatar} alt={user.username} />
                <Typography variant="h6" sx={{ marginLeft: '1vw', marginInlineEnd: 'auto'}} >{user.username}</Typography>
                {isFriend(user.id) ? (
                  <Typography variant="body2" color="text.secondary">Amigo</Typography>
                ) : (
                  <Button
                    variant="contained"
                    disabled={isRequestPending(user.id) || requestStatus[user.id] === 'loading'}
                    onClick={() => handleSendFriendRequest(user.id)}
                  >
                    {requestStatus[user.id] === 'loading' ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      isRequestPending(user.id) ? 'Pedido Pendente' : 'Enviar Pedido de Amizade'
                    )}
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default UsersList;
