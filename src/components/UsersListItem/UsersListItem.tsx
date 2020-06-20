import * as React from "react";
import styles from "./UsersListItem.css";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const UsersListItem = ({ user }: Props) => {
  const avatarStyles = {
    width: "70px",
    borderRadius: "50%",
  };

  return (
    <Link to={`/users/${user.username}`} className={styles.user}>
      <div className={styles.avatarWrapper}>
        <img src={user.avatarUrl} alt="avatar" style={avatarStyles} />
      </div>
      <span className={styles.username}>@{user.username}</span>
    </Link>
  );
};

export default UsersListItem;
