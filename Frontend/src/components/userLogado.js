import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Avatar, Typography, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AddIcon from '@mui/icons-material/Add';
import Logout from '@mui/icons-material/Logout';
import useAuth from "../hooks/useAuth";
import FriendRequests from "./FriendRequests"

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { signout, user } = useAuth();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', placeContent: 'center' }}>
            <Typography component="h2" sx={{ minWidth: 100 }}>Bem vindo, {user.username}</Typography>
                <Tooltip title="Minha conta">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar style={{ width: '80px', height: '80px' }} />

                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/perfil" style={{color: 'white', textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Meu perfil
                    </MenuItem>
                </Link>
                <Link to="/meus-jogos" style={{color: 'white', textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SportsEsportsIcon fontSize="small" />
                        </ListItemIcon>
                        Meus jogos
                    </MenuItem>
                </Link>
                <Link to="/amigos" style={{color: 'white', textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PeopleAltIcon fontSize="small" />
                        </ListItemIcon>
                        Amigos
                    </MenuItem>
                </Link>
                <FriendRequests/>
                <Link to="/adicionar-jogo" style={{color: 'white', textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AddIcon fontSize="small" />
                        </ListItemIcon>
                        Adicionar jogo
                    </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={() => [signout(), navigate("/")]}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Sair
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}