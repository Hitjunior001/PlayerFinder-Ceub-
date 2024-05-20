import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon, Badge, Dialog, List, ListItem, ListItemText } from '@mui/material';
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
  };

  const handleReject = (requestId) => {
    rejectFriendRequest(requestId);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {friendRequests.map((request) => (
          <ListItem disableGutters key={request.id}>
            <ListItemText primary={request.email} />
            <ListItemIcon>
              <CheckCircleOutlineIcon onClick={() => handleAccept(request.id)} />
            </ListItemIcon>
            <ListItemIcon>
              <HighlightOffIcon onClick={() => handleReject(request.id)} />
            </ListItemIcon>
          </ListItem>
        ))}
        {friendRequests.length === 0 && (
          <ListItem disableGutters>
            <ListItemText primary="Nenhum pedido de amizade" />
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
