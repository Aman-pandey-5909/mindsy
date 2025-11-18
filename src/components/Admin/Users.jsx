import React, { useState } from "react";
import UserCardComponent from "../../components/Card/UserCardComponent";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Aman Pandey", date: new Date() },
    { id: 2, name: "Riya Shah", date: new Date() },
  ]);

  const restrict = (id) => setUsers((u) => u.filter((x) => x.id !== id));

  return (
    <div className="w-[750px] mx-auto my-12">
      <h1 className="text-2xl font-semibold mb-5">All Users</h1>

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCardComponent
            key={user.id}
            type="user"
            data={{ name: user.name }}
            buttons={[
              {
                label: "View Details",
                onClick: () => console.log("view", user),
              },
              {
                label: "Restrict",
                variant: "danger",
                onClick: () => restrict(user.id),
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
