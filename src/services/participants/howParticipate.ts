import { vendavallApi } from 'services/api';
import forceDownload from 'services/storage/getUrlToForceDownload';

export interface HowParticipate {
  id: number;
  description: string;
  pictureUrl: string;
  mobilePictureUrl: string;
  slider: string,
  links: {
    id: number;
    type: 'internal' | 'external' | 'file';
    label: string;
    target: string;
  }[];
}

interface ButtonAction {
  id: number;
  type: 'internal' | 'url' | 'file';
  content: string;
  label: string;
  target: string;
  internal_url: string;
}

interface ApiResponse {
  id: number;
  description: string;
  picture: string;
  slider: string;
  video: string;
  sort: string;
  bottom_description: string;
  mobile_picture: string;
  how_participate_buttons: ButtonAction[];
}

const getLink = (item: ButtonAction): string => {
  if (item.type === 'file') {
    return forceDownload({ url: item.content, filename: `${item.label}.pdf` });
  }
  if (item.type === 'url') {
    return item.content;
  }

  return item.internal_url;
};

const transform = (data: ApiResponse): HowParticipate => {
  return {
    id: data.id,
    description: data.description,
    pictureUrl: data.picture,
    mobilePictureUrl: data.mobile_picture ? data.mobile_picture : data.picture,
    slider: data.slider,
    links: data.how_participate_buttons.map(item => ({
      id: item.id,
      type: item.type === 'url' ? 'external' : item.type,
      label: item.label,
      target: getLink(item),
    })),
  };
};

export default async (): Promise<HowParticipate> => {
  const { data } = await vendavallApi.get<ApiResponse>('how_participate');
  return transform(data);
};
