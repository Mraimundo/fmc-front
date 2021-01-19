/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scroller, animateScroll } from 'react-scroll';

import { getMode, getPointsSimulatorFullState } from 'state/modules/points-simulator/selectors';
import { setMode } from 'state/modules/points-simulator/actions';
import { Mode } from 'state/modules/points-simulator/types';

import Calculator from './Calculator';
import Result from './Result';
import Pdf from './Pdf';
import html2Pdf from 'html2pdf.js';
import { generateHtml } from './Pdf/html';

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

  const testRef = useRef<HTMLDivElement>(null);

  const testing = useCallback(
    () => {
      /*const html = document.querySelector('#_container-pdf');
      if (!html) return;
      htmlToCanvas(html as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');


      });*/
      const element = window.document.createElement('div');
      element.innerHTML = generateHtml(pointsSimulatorState);
      /*document.body.appendChild(linkClick);
      linkClick.click();
      document.body.removeChild(linkClick);*/
      const test = document.createElement
      //const element = document.getElementById('_container-pdf');
      const t = html2Pdf().from(element).save();
    },[pointsSimulatorState]
  );

  const shareUrl = 'google.com';
  const title = 'test';

  const s = (): Promise<void> => {
    return new Promise<void>(resolve => {console.log('oi'); resolve(); });
  };

  function isMobileOrTablet() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
  }

  const prepareFile = useCallback(
    async () => {

      /*const element = document.createElement('a');
      const file = new Blob([JSON.stringify(data)], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'myFile.json';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);*/

      const element = window.document.createElement('div');
      element.innerHTML = generateHtml(pointsSimulatorState);
      const test = document.createElement
      const t = await html2Pdf().from(element).outputPdf();
      const file = new Blob([t], { type: 'pdf' });
      console.log('file', file);
      const tmpUrl = URL.createObjectURL(file);
      console.log('tmpUrl', tmpUrl);

      const url = `https://${isMobileOrTablet() ? 'api' : 'web'}.whatsapp.com/send?text=test&separator=:: &url=${tmpUrl}`;
      const linkElement = document.createElement('a');
      linkElement.href = url;
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);

    },
    []
  );

  return (
    <>
      <button type="button" style={{ display: 'none'}}onClick={() => setT(old => !old)} >
        teste
      </button>
      <button type="button" style={{ display: 'flex'}}onClick={prepareFile} >oooo</button>
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
