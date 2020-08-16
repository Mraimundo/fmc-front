import { useLayoutEffect, useState, useRef } from 'react';

function useDimensions<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    setWidth(ref.current.offsetWidth);
  }, [ref]);

  return { ref, width };
}

export default useDimensions;
