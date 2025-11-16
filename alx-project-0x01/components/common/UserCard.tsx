import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600 mt-2">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <div className="mt-3 text-sm text-gray-500">
        <p>Address: {address.suite}, {address.street}, {address.city} - {address.zipcode}</p>
        <p>Company: {company.name} | {company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
