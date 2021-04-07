import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Farmer, Summary } from './interface';

export const participants = [
  {
    id: 1,
    name: 'Nealson Hinkley',
    cpf: '82268052901',
    picture: 'https://robohash.org/aliasminimaerror.png?size=50x50&set=set1',
    client_group: 'Linkbuzz',
    email: 'nhinkley0@t-online.de',
    cell_phone: '87-447-8527',
    created: '2020-12-03 19:20:14',
  },
  {
    id: 2,
    name: 'Christal Catherall',
    cpf: '24227766502',
    picture: 'https://robohash.org/istepossimuslabore.png?size=50x50&set=set1',
    client_group: 'Lajo',
    email: 'ccatherall1@reddit.com',
    cell_phone: '39-726-8307',
    created: '2020-07-24 02:49:39',
  },
  {
    id: 3,
    name: 'Sibyl Reboul',
    cpf: '41282834303',
    picture: 'https://robohash.org/quoilloquam.png?size=50x50&set=set1',
    client_group: 'Pixonyx',
    email: 'sreboul2@moonfruit.com',
    cell_phone: '15-693-1589',
    created: '2020-06-03 07:58:18',
  },
  {
    id: 4,
    name: 'Lyndsie Husband',
    cpf: '67449507504',
    picture: 'https://robohash.org/quimaximerecusandae.png?size=50x50&set=set1',
    client_group: 'Meemm',
    email: 'lhusband3@sciencedaily.com',
    cell_phone: '78-970-8876',
    created: '2020-04-27 12:08:26',
  },
  {
    id: 5,
    name: 'Almeta Kopta',
    cpf: '86722807605',
    picture:
      'https://robohash.org/praesentiummollitiadolorum.png?size=50x50&set=set1',
    client_group: 'Mybuzz',
    email: 'akopta4@tripadvisor.com',
    cell_phone: '36-968-6473',
    created: '2020-07-09 15:57:28',
  },
  {
    id: 6,
    name: 'Bonnibelle Fransinelli',
    cpf: '58404960606',
    picture: 'https://robohash.org/saepecupiditatesint.png?size=50x50&set=set1',
    client_group: 'Devify',
    email: 'bfransinelli5@posterous.com',
    cell_phone: '16-104-7481',
    created: '2020-12-29 04:14:18',
  },
  {
    id: 7,
    name: 'Delmor Titmarsh',
    cpf: '56620401907',
    picture:
      'https://robohash.org/perferendistemporibusut.png?size=50x50&set=set1',
    client_group: 'Gabspot',
    email: 'dtitmarsh6@wired.com',
    cell_phone: '09-569-8503',
    created: '2020-10-19 14:31:21',
  },
  {
    id: 8,
    name: 'Karol Dales',
    cpf: '17065144008',
    picture:
      'https://robohash.org/sintnumquamdoloribus.png?size=50x50&set=set1',
    client_group: 'Edgepulse',
    email: 'kdales7@microsoft.com',
    cell_phone: '42-658-4364',
    created: '2021-01-10 22:27:11',
  },
  {
    id: 9,
    name: 'Al Blay',
    cpf: '59319033109',
    picture:
      'https://robohash.org/laudantiumdebitisautem.png?size=50x50&set=set1',
    client_group: 'Wikizz',
    email: 'ablay8@cafepress.com',
    cell_phone: '56-004-8620',
    created: '2020-07-29 01:41:50',
  },
  {
    id: 10,
    name: 'Reider Wink',
    cpf: '52887868810',
    picture:
      'https://robohash.org/repellendussolutaarchitecto.png?size=50x50&set=set1',
    client_group: 'Jabbersphere',
    email: 'rwink9@ocn.ne.jp',
    cell_phone: '81-220-8073',
    created: '2020-11-16 08:39:02',
  },
  {
    id: 11,
    name: 'Delmore McCosh',
    cpf: '14098634111',
    picture: 'https://robohash.org/totamautid.png?size=50x50&set=set1',
    client_group: 'Tagcat',
    email: 'dmccosha@angelfire.com',
    cell_phone: '42-688-5921',
    created: '2020-12-26 07:32:05',
  },
  {
    id: 12,
    name: 'Richmound Greer',
    cpf: '28644760412',
    picture: 'https://robohash.org/remeumtemporibus.png?size=50x50&set=set1',
    client_group: 'Tagfeed',
    email: 'rgreerb@businessinsider.com',
    cell_phone: '49-569-7894',
    created: '2020-10-25 04:09:58',
  },
  {
    id: 13,
    name: 'Selig Bordis',
    cpf: '24756181713',
    picture:
      'https://robohash.org/voluptatemvoluptaspariatur.png?size=50x50&set=set1',
    client_group: 'Skivee',
    email: 'sbordisc@wikispaces.com',
    cell_phone: '63-223-8506',
    created: '2020-08-04 19:15:35',
  },
  {
    id: 14,
    name: 'Nydia Dutton',
    cpf: '65020094214',
    picture: 'https://robohash.org/culpaetvelit.png?size=50x50&set=set1',
    client_group: 'Kamba',
    email: 'nduttond@mayoclinic.com',
    cell_phone: '14-095-0686',
    created: '2020-05-23 11:15:09',
  },
  {
    id: 15,
    name: 'Livvyy Coucha',
    cpf: '69734277715',
    picture: 'https://robohash.org/solutaautemut.png?size=50x50&set=set1',
    client_group: 'Wordware',
    email: 'lcouchae@example.com',
    cell_phone: '23-432-5264',
    created: '2020-06-23 05:32:10',
  },
] as Farmer[];

export const resume = {
  approved: 7,
  waiting: 5,
  rejected: 3,
} as Summary;

export const getParticipantsList = (page: number): Farmer[] => {
  const start = (page - 1) * 6;
  const end = page * 6;
  return participants.slice(start, end);
};
