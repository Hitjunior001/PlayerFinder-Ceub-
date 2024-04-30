import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function PlayerList() {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline', fontSize: '30px' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              JuninhoGameplays#BR2
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', marginLeft: '2vw', fontSize: '20px' }}
                component="span"
                variant="body2"
                color="text.secundary"
              >
                Função: {"Duelista"}
              </Typography>
              <Typography
                sx={{ display: 'inline', marginLeft: '2vw', fontSize: '20px' }}
                component="span"
                variant="body2"
                color="text.secundary"
              >
                Campeão: {"Raze"}
              </Typography>
              <Typography
                sx={{ display: 'inline', marginLeft: '2vw', fontSize: '20px' }}
                component="span"
                variant="body2"
                color="text.secundary"
              >
                Rank: {"Platina 2"}
              </Typography>
            </React.Fragment>
          }
        />
        <Button style={{ color: 'white', backgroundColor: '#16C83D' }}>
          <OpenInNewIcon sx={{display: 'inline', marginRight: '0.3vw'}}/>
           Ver perfil
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" sx={{ marginLeft: '0', bgcolor: '#16C83D' }} />
    </List>
  );
}