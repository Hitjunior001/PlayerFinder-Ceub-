import { useContext } from "react";
import { FriendsContext } from "../contexts/friends";

const useFriends = () => {
  const context = useContext(FriendsContext);

  return context;
};

export default useFriends;