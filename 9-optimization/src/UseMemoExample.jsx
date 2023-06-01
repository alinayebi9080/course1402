import { useMemo } from "react";
import { useState } from "react";

const multiply = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [isRed, setIsRed] = useState(false);

  const style = { backgroundColor: isRed ? "red" : "green" };
  const double = useMemo(() => multiply(number), [number]);

  return (
    <div>
      <p style={style}>{double}</p>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setIsRed(!isRed)}>Click</button>
    </div>
  );
};

export default UseMemoExample;
