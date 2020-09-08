import React, { useLayoutEffect, useCallback, useEffect } from 'react';

export default function useWindowSize() {
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const changeWindowSize = useCallback(() => {
    const fn = setTimeout(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, 500);

    return () => {
      clearTimeout(fn);
    };
  }, []);

  useEffect(() => {
    changeWindowSize();
  }, [changeWindowSize]);

  useLayoutEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, [changeWindowSize]);

  return windowSize;
}
