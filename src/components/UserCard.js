import React from "react";

const UserCard = (props) => {
  const { user } = props;

  const renderFullName = () => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName;
  };

  return (
    <div className="user-card flex gap-2 items-center mb-4 border rounded p-2 shadow">
      <img src={user.image} className="w-14 h-auto" alt="username" />
      <div className="user-details">
        <h2 className="fullname font-semibold">{renderFullName()}</h2>
        <p className="text-sm text-slate-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
