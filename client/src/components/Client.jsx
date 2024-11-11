import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar name={username} size={40} round="14px" />
      <div className="text-white text-xs">{username}</div>
    </div>
  );
};

export default Client;
