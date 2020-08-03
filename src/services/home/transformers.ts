import { Banner } from 'state/modules/home/types';
import { FetchBannersService } from '.';

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
