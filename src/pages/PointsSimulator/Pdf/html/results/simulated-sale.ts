import { Indicator } from 'state/modules/points-simulator/interfaces';
import { fakeFormatDollars as format } from 'util/points';

interface Props {
  revenues: Indicator;
  pog: Indicator;
}

export default (props: Props) => {
  const { pog, revenues } = props;

  const revenuesValue = format(revenues.simulationData.totalSimulated, 0, 0);
  const pogValue = format(pog.simulationData.totalSimulated, 0, 0);

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

  <!--[if (mso)|(IE)]><td align="center" width="760" style="width: 760px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 760px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_4" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="padding-top: 6px;">
  <p style="font-size:12px;">
    <strong style="font-size:14px;">
      Valor da venda
    </strong>
  </p>
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



  <div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div style="Margin: 0 auto;min-width: 320px;max-width: 760px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="u-row">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:760px;"><tr style="background-color: transparent;"><![endif]-->

  <!--[if (mso)|(IE)]><td align="center" width="253" style="width: 253px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 253px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_5" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#f8d3d1; width: 100%; height: 55px; display: flex; flex-direction: column; justify-content: center;">
  <p style="text-align: center; line-height: 1;">Faturamento</p>
  <p style="text-align: center; font-weight: bold;">US$ ${revenuesValue}</p>
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

  <table id="u_content_html_6" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <div style="border-radius: 5px; background:#f8d3d1; width: 100%; height: 55px; display: flex; flex-direction: column; justify-content: center;">
  <p style="text-align: center; line-height: 1;">POG</p>
  <p style="text-align: center; font-weight: bold;">US$ ${pogValue}</p>
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
