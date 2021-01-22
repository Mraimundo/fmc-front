import React, { useEffect } from 'react';
import html2Pdf from 'html2pdf.js';
import { generateHtml } from './Pdf/html';

const PointsSimulator: React.FC = () => {
  useEffect(() => {
    const load = async () => {
      const data = JSON.parse(localStorage.getItem('@Vendavall:pdfData') || '');
      if (!data) return;
      const html = generateHtml(data);
      const t = html2Pdf.Worker;

      const b = await t().from(html).outputPdf().output('blob');

      const file = new Blob([b], { type: 'application/pdf' });
      const tmpUrl = URL.createObjectURL(file);

      window.open(tmpUrl, '_self');
      setTimeout(() => {
        window.close();
      }, 700);
    };

    load();
  }, []);
  return <div />;
};

export default PointsSimulator;
