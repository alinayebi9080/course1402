import { useRouter } from "next/router";

const Detail = () => {
  const { query } = useRouter();
  return <div>Detail-{query.id}</div>;
};

export default Detail;
