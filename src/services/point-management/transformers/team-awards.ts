import {
  FetchSubsidiariesRawData,
  DataDistribution,
  ScoredParticipantsDataDistribution,
} from 'services/point-management/team-awards';
import {
  Subsidiary,
  ScoredParticipant,
} from 'state/modules/point-management/team-awards/types';
import { extractIdAndPointsFromScoredParticipants } from 'state/modules/point-management/team-awards/utils';

export const transformSubsidiariesRawData = (
  subsidiaries: FetchSubsidiariesRawData[],
): Subsidiary[] => subsidiaries.map(({ id, name }) => ({ id, name }));

interface ITransformScoredParticipantsToDataDistribution {
  scoredParticipants: ScoredParticipant[] | null;
  establishmentId: number;
  pointId: number;
  marketplacePoints: number;
  invoicePoints: number;
}
export const transformScoredParticipantsToDataDistribution = ({
  scoredParticipants,
  establishmentId,
  pointId,
  marketplacePoints,
  invoicePoints,
}: ITransformScoredParticipantsToDataDistribution): DataDistribution[] => {
  const participants = extractIdAndPointsFromScoredParticipants<
    ScoredParticipantsDataDistribution[]
  >(scoredParticipants);

  const points = {
    undistributed_points: [
      {
        id: pointId,
        establishment: {
          id: establishmentId,
          marketplace: marketplacePoints,
          rebate: invoicePoints,
        },
        participants,
      }
    ],
  }
console.log('points on transformer -> ', points)
  return [] as DataDistribution[];
};
