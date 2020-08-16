import { Banner, Highlight, ShowcaseProduct } from 'state/modules/home/types';
import { Product } from 'services/showcase/interfaces';
import { formatDate } from 'util/datetime';
import { limitChars } from 'util/string';
import { FetchBannersService, FetchHighlightsService } from '.';

export const transformBannersRawData = (
  data?: FetchBannersService[] | null,
): Banner[] | null => {
  if (!data) return null;

  return data.map<Banner>(
    (item: FetchBannersService): Banner => ({
      picture: item.picture,
      mobilePicture: item.mobile_picture,
      title: item.title,
    }),
  );
};

export const transformHighlightsRawData = (
  data?: FetchHighlightsService[] | null,
): Highlight[] | null => {
  if (!data) return null;

  return data.map<Highlight>(
    (item: FetchHighlightsService): Highlight => ({
      created: formatDate(item.created),
      picture: item.picture,
      referenceId:
        item.quiz_id || item.report_id || item.fmc_campaign_id || null,
      resume: limitChars(item.description, 100).replace(/<\/?[^>]+(>|$)/g, ''),
      title: item.title,
      type: item.type,
    }),
  );
};

export const transformProductToShowCaseProduct = (
  data: Product[] | null,
): ShowcaseProduct[] | null => {
  if (!data) return null;

  return data.map(item => ({
    id: item.id,
    link: item.catalogUrl,
    name: item.name,
    picture: item.imageUrl,
    price: item.price,
  }));
};
