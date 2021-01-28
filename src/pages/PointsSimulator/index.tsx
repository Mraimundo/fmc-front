import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';

import {
  getMode,
  getPointsSimulatorFullState,
} from 'state/modules/points-simulator/selectors';
import { setMode } from 'state/modules/points-simulator/actions';
import { Mode } from 'state/modules/points-simulator/types';

import routeMap from 'routes/route-map';
import Calculator from './Calculator';
import Result from './Result';
import Pdf from './Pdf';

const PointsSimulator: React.FC = () => {
  const dispatch = useDispatch();
  const [internalModeControl, setInternalModeControl] = useState<Mode>(
    Mode.calculator,
  );
  const mode = useSelector(getMode);
  const pointsSimulatorState = useSelector(getPointsSimulatorFullState);

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

  const testPdf = useCallback(() => {
    localStorage.setItem(
      '@Vendavall:pdfData',
      JSON.stringify(pointsSimulatorState),
    );

    const linkClick = document.createElement('a');
    linkClick.href = `${routeMap.pointsSimulator.pdfGeneratorEmail}`;

    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [pointsSimulatorState]);

  return (
    <>
      <button
        type="button"
        style={{ display: 'none' }}
        onClick={() => setT(old => !old)}
      >
        teste
      </button>
      <button type="button" style={{ display: 'none' }} onClick={testPdf}>
        oooo
      </button>
      {t ? (
        <>
          <Calculator />
          {internalModeControl === Mode.result && <Result />}
        </>
      ) : (
        <Pdf />
      )}
    </>
  );
};

export default PointsSimulator;
