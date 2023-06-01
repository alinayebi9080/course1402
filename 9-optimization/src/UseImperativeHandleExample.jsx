import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

const UseImperativeHandleExample = () => {
  const ref = useRef();

  return (
    <div>
      <button onClick={() => ref.current.focus()}>Focus</button>
      <TextField ref={ref} />
    </div>
  );
};

const TextField = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      alert("hiiii");
    },
  }));

  return <input ref={ref} />;
});

export default UseImperativeHandleExample;
