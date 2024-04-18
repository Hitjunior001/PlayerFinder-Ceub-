import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function PlayerList() {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="JuninhoGameplays#BR2"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', marginLeft: '1vw'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Função: {"Duelista"}
              </Typography>
              <Typography
                sx={{ display: 'inline', marginLeft: '1vw' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Campeão: {"Raze"}
              </Typography>
              <Typography
                sx={{ display: 'inline', marginLeft: '1vw' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Rank: {"Platina 2"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}