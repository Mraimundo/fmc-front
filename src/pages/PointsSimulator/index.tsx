/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';

import { getMode } from 'state/modules/points-simulator/selectors';
import { setMode } from 'state/modules/points-simulator/actions';
import { Mode } from 'state/modules/points-simulator/types';

import { exportComponentAsPDF, exportComponentAsJPEG } from 'react-component-export-image';
import Calculator from './Calculator';
import Result from './Result';
import Pdf from './Pdf';

const PointsSimulator: React.FC = () => {
  const dispatch = useDispatch();
  const [internalModeControl, setInternalModeControl] = useState<Mode>(
    Mode.calculator,
  );
  const mode = useSelector(getMode);

  useEffect(() => {
    if (mode === Mode.result) {
      setInternalModeControl(mode);
      setTimeout(() => {
        scroller.scrollTo('result', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuad',
        });
      }, 100);
      return;
    }
    if (mode === Mode.calculator) {
      animateScroll.scrollToTop({
        duration: 700,
      });
      setTimeout(() => {
        setInternalModeControl(mode);
      }, 800);
    }
  }, [mode]);

  useEffect(() => {
    dispatch(setMode(Mode.calculator));
  }, [dispatch]);

  const [t, setT] = useState(true);

  const testRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <button type="button" onClick={() => exportComponentAsJPEG(testRef)}>
        Export As PDF
      </button>
      <button type="button" onClick={() => setT(old => !old)}>
        teste
      </button>
      {t ? (
        <>
          <Calculator />
          {internalModeControl === Mode.result && <Result />}
        </>
      ) : (
        <Pdf ref={testRef}/>
      )}
    </>
  );
};

export default PointsSimulator;
