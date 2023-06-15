import { useEffect, useState } from "react";

export default function Home({ users }) {
  return (
    <div>
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 5 * 60,
  };
}
