import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendItem.module.css";

export const FriendItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.friendItem}>
      <span
        className={styles.isOnline}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
