import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function FilterDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '30vw' }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{paddingTop: '5vh'}}>
        <ListItemText sx={{textAlign: 'center'}}>
           <Typography sx={{fontSize: '30px'}}>
              Filtros
            </Typography>
        </ListItemText>
        {['Username:', 'Função:', 'Campeão:', 'Rank:'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem sx={{justifyContent: 'center' }}>
            <Button onClick={toggleDrawer(true)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Aplicar filtros</Button>
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