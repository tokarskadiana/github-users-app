import * as React from 'react';
import { connect } from 'react-redux';

import { GetUsersAction, getUsers } from '../../actions';
import UsersListItem from '../UsersListItem/UsersListItem';

import styles from './Users.css';

type PropsFromStore = {
  getUsers: () => GetUsersAction;
} & UsersState;

class Users extends React.Component<PropsFromStore> {
  private get distFromBottom(): number {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
  }

  private readonly handleScroll = this.loadUsers.bind(this);

  componentDidMount(): void {
    this.props.getUsers();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(): React.ReactElement {
    return (
      <div>
        <h1>GitHub users</h1>
        <ul className={styles.usersList}>
          {this.props.usersList.map((user: User, index: number) => (
            <li key={index}>
              <UsersListItem user={user} />
            </li>
          ))}
        </ul>
        {this.props.isLoading ? <p>Loading ....</p> : ''}
      </div>
    );
  }

  private loadUsers(): void {
    const bottom = 30;
    if (this.distFromBottom < bottom && !this.props.isLoading) {
      this.props.getUsers();
    }
  }
}

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps, { getUsers })(Users);
