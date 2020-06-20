import * as React from "react";

interface Props {
  src: string;
  size: number;
}

const Avatar = ({ src, size }: Props) => {
  const avatarStyles = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    backgroundColor: "#c9c9c9",
  };

  return (
    <img src={src} alt="avatar" style={avatarStyles} />
  );
};

export default Avatar;
