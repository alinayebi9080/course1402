import { memo, useState } from "react";

const MemoExample = () => {
  const [state, setState] = useState(1);
  console.log("parent render");

  return (
    <div>
      <Child />
      <p>{state}</p>
      <button onClick={() => setState((c) => c + 1)}>Click</button>
    </div>
  );
};

const Child = memo(() => {
  console.log("child render");
  return <p>Child</p>;
});

export default MemoExample;
