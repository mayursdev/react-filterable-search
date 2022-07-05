import React from "react";
import UserCard from "./UserCard";

const UsersList = (props) => {
  const { users } = props;
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
