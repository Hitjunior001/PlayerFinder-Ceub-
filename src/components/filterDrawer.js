import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { TextField, Typography } from '@mui/material';

export default function FilterDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '30vw' }} role="presentation">
      <List sx={{paddingTop: '5vh'}}>
        <ListItemText sx={{textAlign: 'center'}}>
           <Typography sx={{fontSize: '30px'}}>
              Filtros
            </Typography>
        </ListItemText>
        {['Username', 'Função', 'Campeão', 'Rank'].map((text) => (
          <ListItem key={text} sx={{marginTop: '3vh', paddingRight: '25%'}}>
            <ListItemText sx={{ textAlign: 'end', paddingRight: '1vw' }} primary={text + ":"} />
            <TextField label={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem sx={{justifyContent: 'center' }}>
            <Button onClick={toggleDrawer(false)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Aplicar filtros</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Filtros</Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}