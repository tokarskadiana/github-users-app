import styles from "./User.css";
import * as React from "react";
import { connect } from "react-redux";

const User = ({ selectedUser }: UsersState) => {
  const avatarStyles = {
    width: "150px",
    borderRadius: "50%",
  };

  return (
    <div>
      <h1>User Details</h1>
      {selectedUser ? (
        <div className={styles.userDetails}>
          <div className={styles.avatarWrapper}>
            <img
              src={selectedUser.avatarUrl}
              alt="avatar"
              style={avatarStyles}
            />
          </div>
          <p className={styles.username}>@{selectedUser.username}</p>
          <p className={styles.github}>
            Github page:
            <a href={selectedUser.githubUrl}>{selectedUser.githubUrl}</a>
          </p>
        </div>
      ) : (
        ""
      )}
      {/*{props.isLoading ? <p>Loading ....</p> : ""}*/}
    </div>
  );
};

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps)(User);
