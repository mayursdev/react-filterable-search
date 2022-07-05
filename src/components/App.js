import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UsersList from "./UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("https://dummyjson.com/users");
      const { users } = await resp.json();
      setUsers(users);
      setFilteredList(users);
    };
    fetchUsers();
  }, []);

  const filterList = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);
    const filteredList = users.filter((user) => {
      const firstName = user.firstName.toLowerCase();
      const lastName = user.lastName.toLowerCase();
      const fullName = `${firstName} ${lastName}`;

      return fullName.includes(searchTerm);
    });
    setFilteredList(filteredList);
  };

  return (
    <div className="container mx-auto m-6">
      <input
        type="text"
        className="filterable-search border border-slate-600 rounded p-2 mb-4 w-full"
        placeholder="Search for a user"
        onChange={filterList}
      />

      {users.length ? <UsersList users={filteredList} /> : <Spinner />}
    </div>
  );
};

export default App;
