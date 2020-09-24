import React, { useCallback, useRef, Component } from 'react';
import EmailEditor, { EmailEditorProps } from 'react-email-editor';

import { Container } from './styles';

interface Test extends EmailEditor {
  editor: any;
}

const MailManager: React.FC = () => {
  const src = 'editor.unlayer.com/embed.js';

  const scripts = document.querySelectorAll('script');

  const emailEditorRef = useRef<Test>(null);

  /* const onLoad = useCallback(() => {
    // you can load your template here;
    const templateJson = {};
    emailEditorRef?.current?.editor.loadDesign(templateJson); /* eslint-disable-line * /
  }, []); */

  return (
    <div>
      <h1>Olá</h1>
      <EmailEditor projectId={6231} />
    </div>
  );
};

export default MailManager;
