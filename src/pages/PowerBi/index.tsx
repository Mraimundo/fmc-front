import React, { useEffect, useState } from 'react';
import { models, Report } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import getConfig, { Response as IConfig } from 'services/powerBi/getToken';

// import { Container } from './styles';

const PowerBi: React.FC = () => {
  const [config, setConfig] = useState<IConfig | null>();
  const [report, setReport] = useState<Report>();

  useEffect(() => {
    getConfig().then(data => setConfig(data));
  }, []);

  return config ? (
    <PowerBIEmbed
      embedConfig={{
        type: 'report', // Supported types: report, dashboard, tile, visual and qna
        id: config.reportId,
        embedUrl: config.embedUrl,
        accessToken: config.accessToken,
        tokenType: models.TokenType.Embed,
        settings: {
          panes: {
            filters: {
              visible: false,
            },
            pageNavigation: {
              visible: false,
            },
          },
        },
      }}
      // Define event handlers
      eventHandlers={
        new Map([
          [
            'loaded',
            function () {
              console.log('Report loaded');
            },
          ],
          [
            'rendered',
            function () {
              console.log('Report rendered');
            },
          ],
          [
            'error',
            function (event) {
              console.log(event);
            },
          ],
        ])
      }
      // Add CSS classes to the div element
      cssClassName="report-style-class"
      // Get reference to the embedded object
      getEmbeddedComponent={embeddedReport => {
        setReport(embeddedReport as Report);
      }}
    />
  ) : (
    <>Ola</>
  );
};

export default PowerBi;
