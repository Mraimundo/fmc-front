import { formatDate } from 'util/datetime';
import { Channel } from 'state/modules/points-simulator/interfaces';

interface Props {
  channel: Channel;
  partialDate: Date;
}

export default (props: Props) => {
  const { channel, partialDate: unformattedPartialDate } = props;
  const { groupName, category } = channel;
  const partialDate = formatDate(unformattedPartialDate);
  const simulatedDate = formatDate(new Date());

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

  <table id="u_content_text_9" class="u_content_text" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 16px;font-family:arial,helvetica,sans-serif;" align="left">

    <div class="v-text-align" style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">Simula&ccedil;&atilde;o de Pontos no Programa de Relacionamento JUNTOS FMC</span></strong></span></p>
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

  <table id="u_content_html_21" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

    <div>
      <div style="padding: 10px; border-radius: 5px; background:#dad8d9; width: 100%; height: 80px; display: flex; flex-direction: column; justify-content: center;">
    <p style="line-height: 1; font-weight: bold;">${groupName}</p>
    <p style="margin-top: 7px; line-height: 1;  font-size: 16px">Categoria: ${category}</p>
    <p style="margin-top: 7px; font-weight: bold;">SAFRA 20/21 </p>
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
  <!--[if (mso)|(IE)]><td align="center" width="507" style="width: 507px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-66p67" style="max-width: 320px;min-width: 507px;display: table-cell;vertical-align: top;">
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



  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div style="Margin: 0 auto;min-width: 320px;max-width: 760px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="u-row">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:760px;"><tr style="background-color: transparent;"><![endif]-->

  <!--[if (mso)|(IE)]><td align="center" width="760" style="width: 760px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 760px;display: table-cell;vertical-align: top;">
    <div style="width: 100% !important;">
    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

  <table id="u_content_html_22" class="u_content_html" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

    <div>
      <div style="padding-top: 18px;">
    <p style="font-size:12px;"><strong style="font-size:14px;">Resultado da Simulação</strong> (em ${simulatedDate} com parciais de ${partialDate})</p>
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
