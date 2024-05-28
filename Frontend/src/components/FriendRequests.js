import * as React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon, Badge, Dialog, List, ListItem, ListItemText, Tooltip, IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useFriends from '../hooks/useFriends';
import useAuth from '../hooks/useAuth';

function SimpleDialog({ onClose, open, updateFriendRequests }) {
  const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useFriends();
  const { user } = useAuth();
  const userId = user.id;

  const handleClose = () => {
    onClose();
  };

  const handleAccept = async (requestId) => {
    try {
      await acceptFriendRequest(requestId);
      updateFriendRequests();
      handleClose();
    } catch (error) {
      console.error("Erro ao aceitar pedido de amizade:", error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await rejectFriendRequest(requestId);
      updateFriendRequests();
      handleClose();
    } catch (error) {
      console.error("Erro ao rejeitar pedido de amizade:", error);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pl: 2, width: '20vw' }}>
        {friendRequests.length === 0 || friendRequests.every(request => request.user.id === userId) ? (
          <ListItem disableGutters>
            <ListItemText sx={{ textAlign: 'center' }} primary="Nenhum pedido de amizade" />
          </ListItem>
        )
        :
        (friendRequests.map((request) => (
          request.user.id !== userId && (
            <ListItem disableGutters key={request.id}>
              <ListItemText primary={request.user.username} />
              <ListItemIcon>
                <Tooltip title="Aceitar">
                  <IconButton onClick={() => handleAccept(request.id)}>
                    <CheckCircleOutlineIcon sx={{ color: '#16C83D' }} />
                  </IconButton>
                </Tooltip>
              </ListItemIcon>
              {/* <ListItemIcon>
                <Tooltip title="Rejeitar">
                  <IconButton onClick={() => handleReject(request.id)}>
                    <HighlightOffIcon color="error" />
                  </IconButton>
                </Tooltip>
              </ListItemIcon> */}
            </ListItem>
          )
        )))
        }
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  updateFriendRequests: PropTypes.func.isRequired,
};

export default function FriendsRequestsDialog() {
  const [open, setOpen] = React.useState(false);
  const { friendRequests, fetchFriendRequests } = useFriends();
  const { user } = useAuth();
  const userId = user.id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateFriendRequests = async () => {
    try {
      await fetchFriendRequests();
    } catch (error) {
      console.error("Erro ao atualizar pedidos de amizade:", error);
    }
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <Badge
            badgeContent={friendRequests.filter(request => request.user.id !== userId).length}
            color="error"
          >
            <GroupAddIcon />
          </Badge>
        </ListItemIcon>
        Pedidos de amizade
      </MenuItem>
      <SimpleDialog open={open} onClose={handleClose} updateFriendRequests={updateFriendRequests} />
    </div>
  );
}
