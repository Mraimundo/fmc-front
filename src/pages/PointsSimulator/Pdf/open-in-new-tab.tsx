import React, { useEffect } from 'react';
import html2Pdf from 'html2pdf.js';
import { formatDate } from 'util/datetime';
import { generateHtml } from './html';

const OpenInNewTab: React.FC = () => {
  useEffect(() => {
    const load = async () => {
      const data = JSON.parse(localStorage.getItem('@Vendavall:pdfData') || '');
      if (!data) return;
      const html = generateHtml(data);
      const t = html2Pdf.Worker;

      const datetime = formatDate(new Date(), 'dd-mm-yyyy-hh-mm');
      const b = await t().from(html).outputPdf().output('blob');

      const file = new File([b], `simulacao-${datetime}.pdf`, {
        type: 'application/pdf',
      });
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

export default OpenInNewTab;
