import * as React from 'react';

import styles from './User.scss';

const Github = ({ url }: { url: string }) => {
  return (
    <p>
      Github page:
      <a
        className={styles.githubLink}
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {url}
      </a>
    </p>
  );
};

export default Github;
