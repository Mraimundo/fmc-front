import ReceiptsImage from 'assets/images/flying-high/receitpts.svg';
import ResaleImage from 'assets/images/flying-high/resale.svg';
import RescuesImage from 'assets/images/flying-high/rescues.svg';

export interface HowToWinItem {
  picture: string;
  title: string;
  text: string;
  note?: string;
}

export default [
  {
    picture: ResaleImage,
    title: 'Comprar produtos FMC',
    text:
      'Válido somente para os produtos participantes adquiridos nos canais que também integram o programa Juntos FMC​. ',
  },
  {
    picture: ReceiptsImage,
    title: 'Cadastrar as NFs',
    text:
      'Serão aceitas apenas as notas fiscais emitidas dentro do período de vigência do programa. ',
  },
  {
    picture: RescuesImage,
    title: 'Conquistar FMC Coins e prêmios',
    text:
      'Após a validação das NFs, os FMC Coins* são liberados em até 30 dias​. ',
    note: '*FMC Coins é a moeda do programa! Prazo para resgate: 12 meses.',
  },
] as HowToWinItem[];
