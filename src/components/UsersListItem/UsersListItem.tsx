import * as React from "react";
import styles from "./UsersListItem.css";

const UsersListItem = ({ user }: { user: User }) => {
  const avatarStyles = {
    width: "70px",
    borderRadius: "50%",
  };

  return (
    <div className={styles.user}>
      <div className={styles.avatarWrapper}>
        <img src={user.avatarUrl} alt="avatar" style={avatarStyles} />
      </div>
      <span className={styles.username}>@{user.username}</span>
    </div>
  );
};

export default UsersListItem;
