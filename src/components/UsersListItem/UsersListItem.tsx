import * as React from "react";
import styles from "./UsersListItem.css";
import { connect } from "react-redux";
import { setSelectedUser } from "../../actions";
import { Action } from "redux";
import { Link } from "react-router-dom";

type Props = {
  user: User;
  setSelectedUser: (user: User) => Action;
};

const UsersListItem = ({ user, setSelectedUser }: Props) => {
  const avatarStyles = {
    width: "70px",
    borderRadius: "50%",
  };

  const handleClick = () => setSelectedUser(user);

  return (
    <Link
      to={`/users/${user.username}`}
      className={styles.user}
      onClick={handleClick}
    >
      <div className={styles.avatarWrapper}>
        <img src={user.avatarUrl} alt="avatar" style={avatarStyles} />
      </div>
      <span className={styles.username}>@{user.username}</span>
    </Link>
  );
};

export default connect(null, { setSelectedUser })(UsersListItem);
