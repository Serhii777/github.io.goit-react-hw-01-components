import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <span
            className={
              (styles.statusClasses = friend.isOnline
                ? styles.available
                : styles.notAvailable)
            }>
            {friend.isOnline}
          </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  src:
    "https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg",
  alt: "user avatar",
  name: "name of friend",
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
