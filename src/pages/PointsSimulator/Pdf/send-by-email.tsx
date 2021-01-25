import React, { useEffect } from 'react';
import html2Pdf from 'html2pdf.js';
import sendFile from 'services/storage/sendFile';
import { generateHtml } from './html';

const SendByEmail: React.FC = () => {
  useEffect(() => {
    const load = async () => {
      const data = JSON.parse(localStorage.getItem('@Vendavall:pdfData') || '');
      if (!data) return;
      const html = generateHtml(data);
      const t = html2Pdf.Worker;

      const b = await t().from(html).outputPdf().output('blob');

      const file = new Blob([b], { type: 'application/pdf' });
      const { url } = await sendFile(file, 'test');

      const mailBody = `Baixe agora mesmo o <a href='${url}'>Pdf</a>`;
      window.open(`mailto:email@example.com?subject=Subject&body=${mailBody}`);
      setTimeout(() => {
        window.close();
      }, 700);
    };

    load();
  }, []);
  return <div />;
};

export default SendByEmail;
