import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon, Badge, Dialog, List, ListItem, ListItemText, Tooltip, IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useFriends from '../hooks/useFriends';

function SimpleDialog({ onClose, open }) {
  const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useFriends();

  const handleClose = () => {
    onClose();
  };

  const handleAccept = (requestId) => {
    acceptFriendRequest(requestId);
    handleClose()
  };

  const handleReject = (requestId) => {
    rejectFriendRequest(requestId);
    handleClose()
  };

  return (
    <Dialog onClose={handleClose} open={open}> 
      <List sx={{pl: 2, width: '20vw'}}>
        {friendRequests.map((request) => (
          <ListItem disableGutters key={request.friend.id}>
            <ListItemText primary={request.friend.username} />
            <ListItemIcon>
              <Tooltip title="Aceitar">
                <IconButton onClick={() => handleAccept(request.friend.id)}>
                  <CheckCircleOutlineIcon sx={{color: '#16C83D'}} />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
            <ListItemIcon>
              <Tooltip title="Rejeitar">
                <IconButton  onClick={() => handleReject(request.friend.id)} >
                  <HighlightOffIcon color="error" />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
        ))}
        {friendRequests.length === 0 && (
          <ListItem disableGutters>
            <ListItemText sx={{textAlign: 'center'}} primary="Nenhum pedido de amizade" />
          </ListItem>
        )}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function FriendsRequestsDialog() {
  const [open, setOpen] = React.useState(false);
  const { friendRequests } = useFriends();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <Badge badgeContent={friendRequests.length} color="error">
            <GroupAddIcon />
          </Badge>
        </ListItemIcon>
        Pedidos de amizade
      </MenuItem>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
