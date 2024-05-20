import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Divider, Grid, Paper } from '@mui/material';
import useFriends from '../hooks/useFriends';
import useAuth from '../hooks/useAuth';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { sendFriendRequest, fetchFriendRequests } = useFriends();
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
        setError(error.message);
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
        setError("Erro ao buscar pedidos de amizade");
      }
    };

    fetchData();
  }, [currentUser.id]);

  const handleSendFriendRequest = async (userId) => {
    try {
      await sendFriendRequest(userId);
      fetchFriendRequests(); 
    } catch (error) {
      console.error("Erro ao enviar pedido de amizade:", error);
      if (error.response && error.response.status === 500) {
        setError("Erro interno ao enviar pedido de amizade. Tente novamente mais tarde.");
      } else if (error.response && error.response.status === 400 && error.response.data.message === "Já existe um pedido de amizade pendente entre os usuários.") {
        setError("Já existe um pedido de amizade pendente entre os usuários.");
      } else {
        setError("Erro ao enviar pedido de amizade. Tente novamente mais tarde.");
      }
    }
  };

  const isRequestPending = (userId) => {
    return pendingRequests.includes(userId);
  };

  if (loading) {
    return <Typography variant="h6">Carregando...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper component="div" sx={{ p: 2, m: 2, bgcolor: "#202020", borderRadius: "10px", }}> 
        <Grid container spacing={2} justifyContent={'center'}>
          <Typography variant='h4' sx={{pt: 2}}> Usuários Online </Typography>
          <Divider sx={{bgcolor: '#16C83D', width: '70%'}}/>
          {users.length === 0 ? (
            <Typography variant="h6">Nenhum usuário encontrado.</Typography>
          ) : (
            users.map((user) => (
              <Grid item key={user.id} xs={12} sm={6} md={20}>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Avatar src={user.avatar} alt={user.username} />
                    <Typography variant="h6">{user.username}</Typography>
                    <Button
                      variant="contained"
                      disabled={isRequestPending(user.id)}
                      onClick={() => handleSendFriendRequest(user.id)}
                    >
                      {isRequestPending(user.id) ? 'Pedido Pendente' : 'Enviar Pedido de Amizade'}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default UsersList;
