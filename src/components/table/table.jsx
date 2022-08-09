import React from "react";
import User from "../user/user";

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th> id </th>
          <th> Full Name </th>
          <th> Age </th>
          <th>
            <div> city-1 </div>
            <div> city-2 </div>
            <div> city-3 </div>
            <div> city-4 </div>
            <div> city-5 </div>
          </th>
          <th> Action </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
