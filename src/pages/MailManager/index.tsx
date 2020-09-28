import React, { useCallback, useRef } from 'react';
import EmailEditor from 'react-email-editor';

import { Actions } from './styles';

interface Test extends EmailEditor {
  editor: any;
}

const MailManager: React.FC = () => {
  const emailEditorRef = useRef<Test>(null);

  const saveLayout = useCallback(() => {
    emailEditorRef.current?.saveDesign(data => {
      const element = document.createElement('a');
      const file = new Blob([JSON.stringify(data)], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'myFile.json';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }, []);

  const loadLayout = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (e: any) =>
          emailEditorRef.current?.loadDesign(JSON.parse(e.target.result));
      }
    },
    [],
  );

  const exportHtml = useCallback(() => {
    emailEditorRef.current?.exportHtml(data => {
      const element = document.createElement('a');
      const file = new Blob([data.html], {
        type: 'text/plain',
      });
      element.href = URL.createObjectURL(file);
      element.download = 'test.html';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }, []);

  return (
    <div>
      <Actions>
        <button type="button" onClick={saveLayout}>
          Salvar Layout
        </button>
        <label htmlFor="inputFile">
          <input
            type="file"
            id="inputFile"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={loadLayout}
          />
          <span>Carregar Layout</span>
        </label>
        <button type="button" onClick={exportHtml}>
          Salvar HTML
        </button>
      </Actions>
      <EmailEditor ref={emailEditorRef} projectId={6231} />
    </div>
  );
};

export default MailManager;
