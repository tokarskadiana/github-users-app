import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { GetUserAction, getUser } from '../../actions';
import Avatar from '../Avatar/Avatar';
import Loader from '../Loader/Loader';

import Github from './Github';
import Header from './Header';
import styles from './User.scss';

type PropsFromStore = {
  getUser: (username: string) => GetUserAction;
} & UsersState &
  RouteComponentProps<{ username: string }>;

class User extends React.Component<PropsFromStore> {
  componentDidMount(): void {
    const { username } = this.props.match.params;
    this.props.getUser(username);
  }

  render(): React.ReactElement {
    return (
      <div>
        <Header />
        {this.props.user ? (
          <div className={styles.userDetails}>
            <Avatar src={this.props.user.avatarUrl} size={'150'} />
            <p className={styles.name}>{this.props.user.name}</p>
            <p className={styles.username}>@{this.props.user.username}</p>
            <Github url={this.props.user.githubUrl} />
            <p>Public Repos: {this.props.user.reposCount}</p>
          </div>
        ) : (
          ''
        )}
        {this.props.isLoading ? <Loader /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): UsersState => state.users;

export default connect(mapStateToProps, { getUser })(withRouter(User));
