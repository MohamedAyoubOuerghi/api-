import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <h1> User Card </h1>

      <h2> {user.name}</h2>
    </div>
  );
};

export default UserCard;
