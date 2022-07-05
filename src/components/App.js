import React from "react";

const App = () => {
  return (
    <div className="container mx-auto m-6">
      <input
        type="text"
        className="filterable-search border border-slate-600 rounded p-2 mb-4 w-full"
        placeholder="Search for a user"
      />
      <div className="user-list">
        <div className="user-card flex gap-2 items-center mb-4 border rounded p-2 shadow">
          <img
            src="https://robohash.org/hicveldicta.png"
            className="w-14 h-auto"
            alt="username"
          />
          <div className="user-details">
            <h2 className="fullname font-semibold">Terry Medhurst</h2>
            <p className="text-sm text-slate-500">atuny0@sohu.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
