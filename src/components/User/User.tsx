import styles from "./User.css";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Action } from "redux";
import { getUser } from "../../actions";
import { RouteComponentProps } from "react-router";

type PropsFromStore = {
  getUser: (username: string) => Action;
} & UsersState &
  RouteComponentProps<{ username: string }>;

class User extends React.Component<PropsFromStore, {}> {
  avatarStyles = {
    width: "150px",
    borderRadius: "50%",
  };

  componentDidMount(): void {
    const { username } = this.props.match.params;
    this.props.getUser(username);
  }

  render() {
    return (
      <div>
        <h1>User Details</h1>
        {this.props.user ? (
          <div className={styles.userDetails}>
            <div className={styles.avatarWrapper}>
              <img
                src={this.props.user.avatarUrl}
                alt="avatar"
                style={this.avatarStyles}
              />
            </div>
            <p className={styles.username}>@{this.props.user.username}</p>
            <p className={styles.github}>
              Github page:
              <a
                className={styles.githubLink}
                href={this.props.user.githubUrl}
                rel="noopener"
                target="_blank"
              >
                {this.props.user.githubUrl}
              </a>
            </p>
          </div>
        ) : (
          ""
        )}
        {this.props.isLoading ? <p>Loading ....</p> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps, { getUser })(withRouter(User));
