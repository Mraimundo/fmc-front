import { Indicator } from 'state/modules/points-simulator/interfaces';
import { fakeFormatDollars as format } from 'util/points';

interface Props {
  revenues: Indicator;
  pog: Indicator;
}

export default (props: Props) => {
  const { revenues, pog } = props;

  const revenuesLastRealized = format(revenues.lastRealized, 0, 0);
  const revenuesGoal = format(revenues.currentGoal, 0, 0);
  const revenuesTotal = format(revenues.simulationData.totalRealized, 0, 0);
  const revenuesPartial = format(revenues.currentRealized, 0, 0);
  const revenuesSimulated = format(
    revenues.simulationData.totalSimulated,
    0,
    0,
  );

  const pogLastRealized = format(pog.lastRealized, 0, 0);
  const pogGoal = format(pog.currentGoal, 0, 0);
  const pogTotal = format(pog.simulationData.totalRealized, 0, 0);
  const pogPartial = format(pog.currentRealized, 0, 0);
  const pogSimulated = format(pog.simulationData.totalSimulated, 0, 0);

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

  <table id="u_content_html_14" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#dad8d9; width: 100%; height: 185px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
    <strong>FATURAMENTO</strong>
    <span style="font-size: 10px;">Realizado 19/20 - US$ ${revenuesLastRealized}</span>
  </div>
  <div style="width: 100%; margin-top: 2px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Meta 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${revenuesGoal}</span>
    </div>
    <div style="width: 96%; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Realizado 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${revenuesTotal}</span>
    </div>
  </div>
  <div style="width: 100%; margin-top: 6px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Parcial</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${revenuesPartial}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Simulado</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${revenuesSimulated}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Total</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${revenuesTotal}</span>
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

  <table id="u_content_html_15" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#dad8d9; width: 100%; height: 185px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
    <strong>POG</strong>
    <span style="font-size: 10px;">Realizado 19/20 - US$ ${pogLastRealized}</span>
  </div>
  <div style="width: 100%; margin-top: 2px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Meta 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${pogGoal}</span>
    </div>
    <div style="width: 96%; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Realizado 20/21</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${pogTotal}</span>
    </div>
  </div>
  <div style="width: 100%; margin-top: 6px;">
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Parcial</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${pogPartial}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Simulado</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${pogSimulated}</span>
    </div>
    <div style="width: 96%; background: #e6e4e5; padding: 2px 4px;">
      <span style="display: inline-block; font-size: 10px; width: 50%; " >Total</span>
      <span style="font-size: 10px; width: 50%;">U$$ ${pogTotal}</span>
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
