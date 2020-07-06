import styled from 'styled-components';

type Props = {
  circleDimension: number;
};

export const AvatarCircle = styled.img`
  width: ${({ circleDimension }: Props) => circleDimension}px;
  height: ${({ circleDimension }: Props) => circleDimension}px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarInitialsName = styled.div`
  width: ${({ circleDimension }: Props) => circleDimension}px;
  height: ${({ circleDimension }: Props) => circleDimension}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  background: #cccccc;
`;
