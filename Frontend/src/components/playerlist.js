import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Paper, Grid, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const PlayerList = ({ jogoId }) => {
  const [usuarios, setUsuarios] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/jogo/usuarios?jogoId=${jogoId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          // Agrupar perfis por nome de usuário
          const groupedUsuarios = data.reduce((acc, usuario) => {
            if (!acc[usuario.username]) {
              acc[usuario.username] = [];
            }
            acc[usuario.username].push(usuario);
            return acc;
          }, {});
          setUsuarios(groupedUsuarios);
        } else {
          throw new Error("Erro ao buscar usuários do jogo");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários do jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [jogoId]);

  if (loading) {
    return <CircularProgress sx={{ mt: 2 }} />;
  }

  return (
    <List sx={{ width: '100%' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', maxHeight: '40vh', overflowY: 'scroll' }}>
        {Object.keys(usuarios).map((username) => (
          <Grid item key={username} xs={12}>
            <Paper sx={{ p: 2 }}>
              <React.Fragment key={username}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ display: 'inline', fontSize: '30px' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {username}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        {usuarios[username].map((usuario, index) => (
                          <div key={index} style={{display: 'inline'}}>
                            <Typography
                              sx={{ marginLeft: '2vw', fontSize: '20px' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                            >
                              {usuario.attribute.titulo}: {usuario.attribute.value}
                            </Typography>
                          </div>
                        ))}
                      </React.Fragment>
                    }
                  />
                  {/* <Button
                    component={Link}
                    to={`/perfil/${username}`}
                    style={{ color: 'white', backgroundColor: '#16C83D' }}
                  >
                    <OpenInNewIcon sx={{ display: 'inline', marginRight: '0.3vw' }} />
                    Ver perfil
                  </Button> */}
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: '0', bgcolor: '#16C83D' }} />
              </React.Fragment>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default PlayerList;
