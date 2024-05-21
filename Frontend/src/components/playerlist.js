import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const PlayerList = ({ jogoId }) => {
  const [usuarios, setUsuarios] = useState([]);
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
          setUsuarios(data);
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
      {usuarios.map((usuario) => (
        <React.Fragment key={usuario.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline', fontSize: '30px' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {usuario.username}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline', marginLeft: '2vw', fontSize: '20px' }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    Discord: {usuario.discord}
                  </Typography>
                  <Typography
                    sx={{ display: 'inline', marginLeft: '2vw', fontSize: '20px' }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    Email: {usuario.email}
                  </Typography>
                </React.Fragment>
              }
            />
            <Button 
              component={Link}
              to={`/perfil/${usuario.username}`}
              style={{ color: 'white', backgroundColor: '#16C83D' }}
            >
              <OpenInNewIcon sx={{display: 'inline', marginRight: '0.3vw'}}/>
              Ver perfil
            </Button>
          </ListItem>
          <Divider variant="inset" component="li" sx={{ marginLeft: '0', bgcolor: '#16C83D' }} />
        </React.Fragment>
      ))}
    </List>
  );
}

export default PlayerList;
