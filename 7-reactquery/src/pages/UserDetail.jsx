import { useParams } from "react-router-dom";
import { useUserDetail } from "../hooks/useUsers";

const UserDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useUserDetail(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>{data?.name}</div>;
};

export default UserDetail;
