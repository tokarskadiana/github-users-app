import * as React from "react";
import { connect } from "react-redux";

function Users({ usersList }: UsersState): React.ReactElement {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersList.map((user: User, i: number) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state: AppState): UsersState {
  return state.users;
}

export default connect(mapStateToProps)(Users);
