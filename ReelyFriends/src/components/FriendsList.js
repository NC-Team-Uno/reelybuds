import  { useState, useEffect, useContext } from "react";

import { UserContext } from "../contexts/User";



const FriendsList = () => {
  const {user,setUser} = useContext(UserContext) // user from db
  const [friendsList, setFriendsList] = useState({});
  useEffect(() => {
    Object.keys().forEach(() => {
      getFriendsByUserId().then((friendsResponse) => {
        setFriendsList(() => ({
          //spread friends?
        }));
      });
    });
  }, []);
};

export default FriendsList;
