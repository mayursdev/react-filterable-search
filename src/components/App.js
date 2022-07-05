import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UsersList from "./UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("https://dummyjson.com/users");
      const { users } = await resp.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className="container mx-auto m-6">
      <input
        type="text"
        className="filterable-search border border-slate-600 rounded p-2 mb-4 w-full"
        placeholder="Search for a user"
      />
      {users.length ? <UsersList users={users} /> : <Spinner />}
    </div>
  );
};

export default App;
