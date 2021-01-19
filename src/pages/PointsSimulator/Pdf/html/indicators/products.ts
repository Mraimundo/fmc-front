import { Indicator } from 'state/modules/points-simulator/interfaces';
import { fakeFormatDollars as format } from 'util/points';

interface Props {
  premio: Indicator;
  hero: Indicator;
  talisman: Indicator;
}

export default (props: Props) => {
  const { premio, hero, talisman } = props;

  const premioLastRealized = format(premio.lastRealized, 0, 0);
  const premioGoal = format(premio.currentGoal, 0, 0);
  const premioTotal = format(premio.simulationData.totalRealized, 0, 0);
  const premioPartial = format(premio.currentRealized, 0, 0);
  const premioSimulated = format(premio.simulationData.totalSimulated, 0, 0);

  const heroLastRealized = format(hero.lastRealized, 0, 0);
  const heroGoal = format(hero.currentGoal, 0, 0);
  const heroTotal = format(hero.simulationData.totalRealized, 0, 0);
  const heroPartial = format(hero.currentRealized, 0, 0);
  const heroSimulated = format(hero.simulationData.totalSimulated, 0, 0);

  const talismanLastRealized = format(talisman.lastRealized, 0, 0);
  const talismanGoal = format(talisman.currentGoal, 0, 0);
  const talismanTotal = format(talisman.simulationData.totalRealized, 0, 0);
  const talismanPartial = format(talisman.currentRealized, 0, 0);
  const talismanSimulated = format(
    talisman.simulationData.totalSimulated,
    0,
    0,
  );

  return `
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #fcfcfc;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #fcfcfc;"><![endif]-->


  <div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div style="Margin: 0 auto;min-width: 320px;max-width: 760px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="u-row">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:760px;"><tr style="background-color: transparent;"><![endif]-->

  <!--[if (mso)|(IE)]><td align="center" width="253" style="width: 253px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 253px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_11" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#dad8d9; width: 100%; height: 185px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
    <strong>PREMIO</strong>
    <span style="font-size: 10px;">Realizado 19/20 - US$ ${premioLastRealized}</span>
  </div>
  <div style="width: 100%; margin-top: 2px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Meta 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${premioGoal}</span>
    </div>
    <div style="width: 96%; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Realizado 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${premioTotal}</span>
    </div>
  </div>
  <div style="width: 100%; margin-top: 6px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Parcial</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${premioPartial}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Simulado</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${premioSimulated}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Total</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${premioTotal}</span>
    </div>
  </div>
  </div>
  </div>

      </td>
    </tr>
  </tbody>
  </table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="253" style="width: 253px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 253px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_13" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#dad8d9; width: 100%; height: 185px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
    <strong>HERO</strong>
    <span style="font-size: 10px;">Realizado 19/20 - US$ ${heroLastRealized}</span>
  </div>
  <div style="width: 100%; margin-top: 2px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Meta 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${heroGoal}</span>
    </div>
    <div style="width: 96%; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Realizado 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${heroTotal}</span>
    </div>
  </div>
  <div style="width: 100%; margin-top: 6px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Parcial</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${heroPartial}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Simulado</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${heroSimulated}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Total</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${heroTotal}</span>
    </div>
  </div>
  </div>
  </div>

      </td>
    </tr>
  </tbody>
  </table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="253" style="width: 253px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 253px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_12" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#dad8d9; width: 100%; height: 185px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
    <strong>TALISMAN</strong>
    <span style="font-size: 10px;">Realizado 19/20 - US$ ${talismanLastRealized}</span>
  </div>
  <div style="width: 100%; margin-top: 2px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Meta 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${talismanGoal}</span>
    </div>
    <div style="width: 96%; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Realizado 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${talismanTotal}</span>
    </div>
  </div>
  <div style="width: 100%; margin-top: 6px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Parcial</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${talismanPartial}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Simulado</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${talismanSimulated}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Total</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${talismanTotal}</span>
    </div>
  </div>
  </div>
  </div>

      </td>
    </tr>
  </tbody>
  </table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if (mso)|(IE)]></div><![endif]-->
  `;
};
