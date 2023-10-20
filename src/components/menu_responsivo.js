import React from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavBar } from './nav-bar';

export const ResponsiveMenu = () => {
 const [drawerOpen, setDrawerOpen] = React.useState(false);

 const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
 };

 return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        edge="center"
        color="inherit"
        aria-label="menu"
        
        onClick={toggleDrawer}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List style={{backgroundColor:"#696969", width:"25vw", overflowY:"scroll"}}>
          {[<NavBar/>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MenuIcon /> : null}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
 )
};

