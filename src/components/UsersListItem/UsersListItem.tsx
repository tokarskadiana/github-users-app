import * as React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';

import styles from './UsersListItem.css';

interface Props {
  user: User;
}

const UsersListItem = ({ user }: Props) => {
  return (
    <Link to={`/users/${user.username}`} className={styles.user}>
      <div className={styles.avatarWrapper}>
        <Avatar src={user.avatarUrl} size={'70'} />
      </div>
      <span className={styles.username}>@{user.username}</span>
    </Link>
  );
};

export default UsersListItem;
