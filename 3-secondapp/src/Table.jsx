import { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);

  const handleGetData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setUsers(json);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
