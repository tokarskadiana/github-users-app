import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { SetUserAction, setUser } from '../../actions';
import arrow from '../../assets/arrow-back.svg';

import styles from './User.scss';

interface Props {
  setUser: (user?: User) => SetUserAction;
}

const Header = (props: Props) => {
  const handleClick = () => props.setUser();

  return (
    <h1 className={styles.header}>
      <Link to="/users">
        <img src={arrow} alt="back" width={'30px'} onClick={handleClick} />
      </Link>
      User Details
    </h1>
  );
};

export default connect(undefined, { setUser })(Header);
