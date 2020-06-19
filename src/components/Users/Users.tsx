import * as React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import { Action } from "redux";
import styles from "./Users.css";

type PropsFromStore = {
  getUsers: () => Action;
} & UsersState;

class Users extends React.Component<PropsFromStore, {}> {
  private handleScroll = this.loadUsers.bind(this);

  componentDidMount(): void {
    this.props.getUsers();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(): React.ReactElement {
    return (
      <div>
        <h1>GitHub users</h1>
        <ul className={styles.usersList}>
          {this.props.usersList.map((user: User, i: number) => (
            <li key={i} className={styles.user}>
              <img
                className={styles.avatar}
                src={user.avatarUrl}
                alt="avatar"
                width="70px"
              />
              <span className={styles.username}>@{user.username}</span>
            </li>
          ))}
        </ul>
        {this.props.isLoading ? <p>Loading ....</p> : ""}
      </div>
    );
  }

  private loadUsers(): void {
    if (this.distFromBottom < 30 && !this.props.isLoading) {
      this.props.getUsers();
    }
  }

  private get distFromBottom(): number {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
  }
}

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps, { getUsers })(Users);
