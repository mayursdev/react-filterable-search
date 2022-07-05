import React from "react";
import UsersList from "./UsersList";

const App = () => {
  return (
    <div className="container mx-auto m-6">
      <input
        type="text"
        className="filterable-search border border-slate-600 rounded p-2 mb-4 w-full"
        placeholder="Search for a user"
      />
      <UsersList />
    </div>
  );
};

export default App;
