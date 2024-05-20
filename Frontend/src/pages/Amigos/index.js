import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, Paper, Button, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import useFriends from "../../hooks/useFriends";
import useAuth from "../../hooks/useAuth";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Page = () => {
  const { fetchFriends, deleteFriend } = useFriends();
  const [isLoading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const result = await fetchFriends();
        setFriends(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFriends();
  }, [fetchFriends]);

  const handleDeleteFriend = async (friendId) => {
    try {
      await deleteFriend(friendId);
      const updatedFriends = friends.filter(friend => friend.user.id !== friendId && friend.friend.id !== friendId);
      setFriends(updatedFriends);
    } catch (error) {
      setError(error);
    }
  };

  const userId = user.id;

  const acceptedFriends = friends.filter(friendship => friendship.user.id === userId);
  const sentFriends = friends.filter(friendship => friendship.friend.id === userId);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <PeopleAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Amigos
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : error ? (
              <Typography variant="body1" color="error">
                Erro: {error.message}
              </Typography>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", width: "90vw", alignItems: 'center' }}>
                <Typography variant="h6">Amigos que aceitaram sua solicitação</Typography>
                {acceptedFriends.map(friendship => (
                  <Paper key={friendship.user.username} component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px" }}>
                    <Link to={`../perfil/${friendship.friend.username}`} style={{ textDecoration: 'none', color: 'white' }}>
                      {friendship.friend.username}
                    </Link>
                    <Button variant="contained" color="secondary" onClick={() => handleDeleteFriend(friendship.friend.id)}>
                      Excluir Amizade
                    </Button>
                  </Paper>
                ))}

                <Typography variant="h6" sx={{ mt: 2 }}>Amigos que você aceitou</Typography>
                {sentFriends.map(friendship => (
                  <Paper key={friendship.user.username} component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px" }}>
                    <Link to={`../perfil/${friendship.user.username}`} style={{ textDecoration: 'none', color: 'white' }}>
                      {friendship.user.username}
                    </Link>
                    <Button variant="contained" color="secondary" onClick={() => handleDeleteFriend(friendship.user.id)}>
                      Excluir Amizade
                    </Button>
                  </Paper>
                ))}
              </div>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
