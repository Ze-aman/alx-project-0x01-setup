import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [newUsers, setNewUsers] = useState<UserData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setNewUsers((prev) => [...prev, { ...user, id: users.length + prev.length + 1 }]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users?.map((user: UserProps, key: number) => (
            <UserCard {...user} key={key} />
          ))}
          {newUsers.map((user: UserData) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      </main>
      <Footer />

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
