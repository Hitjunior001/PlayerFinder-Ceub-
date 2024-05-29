import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const JogoList = ({ jogos, setSelectedJogoId }) => {
  return (
    <List>
      {jogos.map((jogo) => (
        <ListItem key={jogo.id}>
          <ListItemButton onClick={() => setSelectedJogoId(jogo.id)}>
            <ListItemText primary={jogo.titulo} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default JogoList;
