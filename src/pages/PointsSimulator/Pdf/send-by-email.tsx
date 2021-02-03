import React, { useEffect } from 'react';
import html2Pdf from 'html2pdf.js';
import sendFile from 'services/storage/sendFile';
import { formatDate } from 'util/datetime';
import { generateHtml } from './html';

const SendByEmail: React.FC = () => {
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

      const { url } = await sendFile(file, 'simulacao');

      const mailBody = `Baixe agora mesmo o <a href="${url}">Pdf</a>`;
      const mailSubject = `Programa de Relacionamento JUNTOS | Simulação de Pontos`;
      window.open(`mailto:email@example.com?subject=${mailSubject}&body=${mailBody}`);
      setTimeout(() => {
        window.close();
      }, 700);
    };

    load();
  }, []);
  return <div />;
};

export default SendByEmail;
