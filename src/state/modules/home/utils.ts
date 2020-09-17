import routeMap from 'routes/route-map';
import { HighlightTypes } from 'state/modules/home/constants';

export const getHighlightLink = (
  type: HighlightTypes | null,
  id: number | null,
): string => {
  if (!type) return '/';

  return (
    {
      [HighlightTypes.Quiz]: `${routeMap.training}/${id}`,
      [HighlightTypes.Report]: `${routeMap.news}/${id}`,
      [HighlightTypes.FmcCampaign]: `${routeMap.campaign}/${id}`,
    }[type] || '/'
  );
};
