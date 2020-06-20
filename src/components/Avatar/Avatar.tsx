import * as React from 'react';

interface Props {
  size: string;
  src: string;
}

const Avatar = ({ src, size }: Props) => {
  const avatarStyles = {
    backgroundColor: '#c9c9c9',
    borderRadius: '50%',
    height: `${size}px`,
    width: `${size}px`,
  };

  return <img src={src} alt="avatar" style={avatarStyles} />;
};

export default Avatar;
