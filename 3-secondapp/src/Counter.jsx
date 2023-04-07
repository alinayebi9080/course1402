import { useState } from "react";

// const arr = [0, 1, 2];
// const [a, c, b] = arr;

const Counter = ({ defaultCount = 0, textColor = "black" }) => {
  const [count, setCount] = useState(defaultCount);

  const handleAdd = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p style={{ color: textColor }}>{count}</p>
      <button onClick={handleAdd}>Click</button>
    </div>
  );
};

export default Counter;
