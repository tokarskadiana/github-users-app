import styles from "./User.scss";
import * as React from "react";

const Github = ({ url }: { url: string }) => {
  return (
    <p>
      Github page:
      <a
        className={styles.githubLink}
        href={url}
        rel="noopener"
        target="_blank"
      >
        {url}
      </a>
    </p>
  );
};

export default Github;
