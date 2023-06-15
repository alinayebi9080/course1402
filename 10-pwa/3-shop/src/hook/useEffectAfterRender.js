import { useEffect, useRef } from "react";

const useEffectAfterRender = (cb, dep = []) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      cb();
    }
    firstRender.current = false;
  }, dep);
};

export default useEffectAfterRender;
