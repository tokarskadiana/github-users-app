import * as React from "react";
import arrow from "../../assets/arrow-back.svg";
import styles from "./User.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {};
  return (
    <h1 className={styles.header}>
      <Link to="/users">
        <img src={arrow} alt="back" width={"30px"} onClick={handleClick} />
      </Link>
      User Details
    </h1>
  );
};

export default Header;
