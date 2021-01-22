import { Product } from 'state/modules/points-simulator/interfaces';
import head from './head';
import body from './body';

interface Props {
  products: Product[];
}

export default (props: Props) => {
  const { products } = props;

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

  <table id="u_content_html_18" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

  <div>
    <table style="text-align: left; border-collapse: separate; border-spacing: 0 8px; font-size: 10px; width: 100%; border: 0px solid #000;">

  <!-- HEAD DA TABELA -->
    ${head}
  <!-- FIM HEAD DA TABELA -->

  <!-- BODY DA TABELA -->
    ${body({ products })}
  <!-- FIM BODY DA TABELA -->

  </table>
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
