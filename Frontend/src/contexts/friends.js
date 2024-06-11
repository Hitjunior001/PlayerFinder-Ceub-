import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export const FriendsContext = createContext({});

export const FriendsProvider = ({ children }) => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);

  const api = "http://localhost:8080/api";
  const { user } = useAuth()

  useEffect(() => {
    if(user != null){
      fetchFriendRequests();
    }
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/list/requests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar pedidos de amizade");
      }

      const data = await response.json();
      setFriendRequests(data);
      return data;
      
    } catch (error) {
      console.error("Erro ao buscar pedidos de amizade:", error);
    }
  };

  const fetchFriends = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/list/friends`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar as amizade");
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error("Erro ao buscar as amizade:", error);
    }
  };

  const sendFriendRequest = async (friendId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/sendRequest?friendId=${friendId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        }
    });

      if (!response.ok) {
        throw new Error("Erro ao enviar pedido de amizade");
      }

      const data = await response.json();
      setFriendRequests((prev) => [...prev, data]);
      return true;
    } catch (error) {
      console.error("Erro ao enviar pedido de amizade:", error);
      return false;
    }
  };

  const acceptFriendRequest = async (requestId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/acceptRequest?requestId=${requestId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error("Erro ao aceitar pedido de amizade");
      }

      const data = await response.json();
      setFriendRequests((prev) => prev.filter((req) => req.id !== requestId));
      return true;
    } catch (error) {
      console.error("Erro ao aceitar pedido de amizade:", error);
      return false;
    }
  };

  const rejectFriendRequest = async (requestId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/rejectRequest?requestId=${requestId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ requestId }),
      });

      if (!response.ok) {
        throw new Error("Erro ao rejeitar pedido de amizade");
      }

      setFriendRequests((prev) => prev.filter((req) => req.id !== requestId));
      return true;
    } catch (error) {
      console.error("Erro ao rejeitar pedido de amizade:", error);
      return false;
    }
  };

  const deleteFriend = async (friendId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/relationships/list/friends/delete?friendId=${friendId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if(response.ok){
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };

  return (
    <FriendsContext.Provider value={{friendRequests, fetchFriendRequests, sendFriendRequest, acceptFriendRequest, rejectFriendRequest,fetchFriends, deleteFriend }}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);
