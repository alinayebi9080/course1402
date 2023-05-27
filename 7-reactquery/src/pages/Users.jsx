import { Link } from "react-router-dom";
import { useAddUser, useUsers } from "../hooks/useUsers";
import { useState } from "react";

const Users = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState();

  const { mutate } = useAddUser();
  const { data = [] } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <button>Add</button>
      </form>
      {data.map((item) => (
        <div>
          <Link key={item.id} to={`/user/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
      {/* <button onClick={() => setPage(page + 1)}>Next</button> */}
      {/* <button onClick={() => setPage(page - 1)}>Previous</button> */}
    </div>
  );
};

export default Users;

// 1-> traditional -> useefect, setstate
// 2-> custom hook -> useQuery,useMutation
// 3-> react query -> useQuery,useMutation
