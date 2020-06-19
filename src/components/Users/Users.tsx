import * as React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import { Action } from "redux";

type PropsFromStore = {
  getUsers: () => Action;
} & UsersState;

class Users extends React.Component<PropsFromStore, {}> {
  componentDidMount(): void {
    this.props.getUsers();
  }

  render(): React.ReactElement {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.props.usersList.map((user: User, i: number) => (
            <li key={i}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps, { getUsers })(Users);
