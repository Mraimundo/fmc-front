import {
  PointsSimulatorState,
  IndicatorType,
} from 'state/modules/points-simulator/interfaces';
import head from './head';
import logo from './logo';
import header from './header';
import results from './results';
import separator from './separator';
import indicators from './indicators';
import dollarBase from './dollar-base';
import whiteSpace from './white-space';
import calculatorBase from './calculator-base';

export const generateHtml = (pointsSimulatorState: PointsSimulatorState) => {
  const {
    channel,
    configuration,
    indicators: indicatorsState,
    award,
    dollarBaseValue,
    products,
  } = pointsSimulatorState;
  const { partialDate } = configuration;

  const revenues = indicatorsState.find(
    item => item.type === IndicatorType.revenues,
  );
  const pog = indicatorsState.find(item => item.type === IndicatorType.pog);
  const premio = indicatorsState.find(
    item => item.type === IndicatorType.premio,
  );
  const hero = indicatorsState.find(item => item.type === IndicatorType.hero);
  const talisman = indicatorsState.find(
    item => item.type === IndicatorType.talisman,
  );

  if (!channel) return '';
  if (!partialDate) return '';
  if (!revenues) return '';
  if (!pog) return '';
  if (!premio) return '';
  if (!hero) return '';
  if (!talisman) return '';

  return `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    ${head}

    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #fcfcfc">
      ${logo}

      ${header({ channel, partialDate })}

      ${results({ award, pog, revenues })}

      ${separator}

      ${indicators({ revenues, pog, hero, premio, talisman })}

      ${whiteSpace(35)}

      ${separator}
        ${dollarBase({ dollarValue: dollarBaseValue })}
      ${separator}

      ${whiteSpace(20)}
      ${calculatorBase({ products })}

      ${whiteSpace(20)}

    </body>

  </html>
  `;
};
