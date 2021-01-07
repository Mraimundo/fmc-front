/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';

import { getMode } from 'state/modules/points-simulator/selectors';
import { setMode } from 'state/modules/points-simulator/actions';
import { Mode } from 'state/modules/points-simulator/types';

import Calculator from './Calculator';
import Result from './Result';
import Pdf from './Pdf2';
import html2Pdf from 'html2pdf.js';

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

  const testing = useCallback(
    () => {
      /*const html = document.querySelector('#_container-pdf');
      if (!html) return;
      htmlToCanvas(html as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');


      });*/
      const element = document.getElementById('_container-pdf');
      const t = html2Pdf().from(element).save();
    },[]
  );

  return (
    <>
      <button type="button" onClick={() => setT(old => !old)} style={{display: 'none'}}>
        teste
      </button>
      <button type="button" onClick={testing} style={{display: 'none'}}>oooo</button>
      {t ? (
        <>
          <Calculator />
          {internalModeControl === Mode.result && <Result />}
        </>
      ) : (
        <Pdf/>
      )}
    </>
  );
};

export default PointsSimulator;