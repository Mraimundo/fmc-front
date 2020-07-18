import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

type Props = {
  circleDimension: number;
};

export const AvatarCircle = styled.img`
  min-width: ${({ circleDimension }: Props) => circleDimension}px;
  width: ${({ circleDimension }: Props) => circleDimension}px;
  height: ${({ circleDimension }: Props) => circleDimension}px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarInitialsName = styled.div`
  min-width: ${({ circleDimension }: Props) => circleDimension}px;
  width: ${({ circleDimension }: Props) => circleDimension}px;
  height: ${({ circleDimension }: Props) => circleDimension}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  font-family: ${FONTS.bold};
  background: #cccccc;
`;
