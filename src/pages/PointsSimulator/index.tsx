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

import html2canvas from 'html2canvas';

import { jsPDF } from "jspdf";

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

  const testing2 = useCallback(
    async () => {
      const element = window.document.createElement('html');
      element.innerHTML = generateHtml(pointsSimulatorState);
      document.body.appendChild(element);

      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 1, 10, canvas.width, canvas.height);
      doc.save('sample-file.pdf');

      document.body.removeChild(element);


    }, []
  );

  const testing = useCallback(
    async () => {
      /*const html = document.querySelector('#_container-pdf');
      if (!html) return;
      htmlToCanvas(html as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');


      });*/
      // const element = window.document.createElement('html');
      const html = generateHtml(pointsSimulatorState);
      // element.innerHTML = html;
      // document.body.appendChild(element);

      const element = new DOMParser().parseFromString(html, 'text/html');
      const canvas = await html2canvas(element.documentElement);
      console.log(element.documentElement);

      const doc = new jsPDF("p", "mm", "a4");

      var imgData = canvas.toDataURL('image/png');
      console.log('canvas', canvas);

      var pageHeight = 295;
      var imgWidth = (canvas.width * 50) / 210 ;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 5;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      }
      doc.output('dataurlnewwindow');
      doc.save(Date.now() +'.pdf');


      //console.log('t',t);
      //const imgData = t.toDataURL('image/png');
      //console.log('imgData', imgData);
      //document.body.removeChild(element)
      //console.log(html);
      /*document.body.appendChild(linkClick);
      linkClick.click();
      document.body.removeChild(linkClick);*/
      //const element = document.getElementById('_container-pdf');
      //const t = html2Pdf().from(html).then((e:any) => console.log(e));
      //console.log('t',t);



      /*const t1 = await t.from(html);
      console.log('t1', t1);*/

      /*const t2 = await t.toContainer();
      console.log('t2', t2);

      const t3 = await t.toCanvas();
      console.log('t3', t3);

      const t4 = await t.toImg();
      console.log('t4', t4);

      const t5 = await t.toPdf();
      console.log('t5', t5);*/

      //const t = html2Pdf().from(html).save();
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
      <button type="button" style={{ display: 'flex'}}onClick={testing} >oooo</button>
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
