import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const DistributeButton = styled.button`
  color: #2a4207;
  text-transform: uppercase;
  font-family: ${FONTS.bold};
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  padding: 0 1.5em;
  outline: none;
  border: none;
  transition: box-shadow 150ms ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: none;
  }
`;

export const TotalPointsToDistributeText = styled.h1`
  font-size: 1.6em;
  font-family: ${FONTS.bold};
  margin-bottom: 5px;
`;

export const HeaderImageWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  height: 245px;

  img {
    width: 100%;
    height: 245px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;

export const HeaderAutonomyWrapper = styled(HeaderImageWrapper)`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100% - 14.5%);
    background: #a4b0b7;
    padding: 1em;
    border-radius: 10px;
    position: absolute;
    bottom: 40px;
    left: 18px;
    height: calc(100% - 65px);
  }
`;

export const TextDistributeWrapper = styled.div`
  width: 30%;
`;

export const InputsWrapper = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
`;

export const BoxInput = styled.div`
  padding: 1em 2em;
  background-color: #fff;
  color: #2a4207;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:not(:last-child) {
    margin-right: 10px;
  }

  > h2 {
    font-family: ${FONTS.bold};
    font-size: 1.1em;
  }

  > span {
    font-size: 0.8em;
  }
`;

export const DistributeInput = styled.input`
  height: 40px;
  width: 100%;
  color: #2a4207;
  font-family: ${FONTS.bold};
  border-radius: 0;
  border: 1.5px solid #2a4207;
  margin-top: 1em;
  padding: 1em;
  text-align: center;
  font-size: 1.2em;

  &:disabled {
    background: #eee;
  }
`;

export const WrapperBoxPoints = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const boxPointsColors = {
  teamAwards: '#193B4E',
  resaleCooperative: '#A4B0B7',
};
export const BoxPoints = styled.div`
  border-radius: 20px;
  background-color: ${({
    type,
  }: {
    type: 'teamAwards' | 'resaleCooperative';
  }) => boxPointsColors[type]};
  padding: 2em;
  margin: 5px;
  height: calc(100% - 33%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  text-align: center;
`;

export const PointsText = styled.h2`
  font-family: ${FONTS.bold};
`;
