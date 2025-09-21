import React from "react";
import friends from "../../data/friends.json";
import { FriendItem } from "../FriendItem/FriendItem";
import styles from "./FriendsList.module.css";

export const FriendsList = () => {
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
