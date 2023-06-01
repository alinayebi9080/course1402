import { useMemo } from "react";
import { useCallback } from "react";
import { memo, useState } from "react";

const UseCallbackExample = () => {
  const [state, setState] = useState(1);

  const getItems = useCallback(() => {
    return 2;
  }, []);

  const ali = useMemo(() => ({ name: "ali" }), []);

  return (
    <div>
      <Child getItems={getItems} user={ali} />
      <p>{state}</p>
      <button onClick={() => setState((c) => c + 1)}>Click</button>
    </div>
  );
};

const Child = memo(({ getItems }) => {
  console.log("child render");
  return <p>Child</p>;
});

export default UseCallbackExample;
