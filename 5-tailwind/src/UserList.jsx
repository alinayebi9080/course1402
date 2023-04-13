import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [fistName, setFirstName] = useState();

  const handleGetData = async () => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users");
      setUsers(data.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleDelete = (id) => {
    const y = window.confirm("Are you sure?");
    if (y) {
      const filteredData = users.filter((item) => item.id !== id);
      setUsers(filteredData);
    }
    //api delete call
  };

  const handleAdd = () => {
    //shallow copy
    // const copy = [...users];
    // copy.push({ first_name: fistName, id: users.length + 1 });
    // setUsers(copy);

    const newUser = { first_name: fistName, id: users.length + 1 };
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <form>
        <input
          className="border p-2 m-2"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button className="bg-purple-200 p-2 rounded" onClick={handleAdd}>
          Add
        </button>
      </form>
      <table className="w-full m-4 shadow-md rounded overflow-hidden">
        <thead>
          <tr className="text-white bg-slate-900">
            <th className="table-header">#</th>
            <th className="table-header">firstName</th>
            <th className="table-header">lastName</th>
            <th className="table-header">email</th>
            <th className="table-header">image</th>
            <th className="table-header">delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.first_name}</td>
              <td className="text-center">{item.last_name}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center p-2">
                <img src={item.avatar} className="mx-auto" />
              </td>
              <td className="text-center">
                <button
                  className="mx-auto"
                  onClick={() => handleDelete(item.id)}
                >
                  <AiOutlineDelete
                    size={50}
                    className="text-red-600 p-2 hover:text-red-800 hover:shadow-md hover:border hover:rounded-full"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
