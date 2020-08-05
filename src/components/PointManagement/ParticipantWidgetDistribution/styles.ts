import styled, { css } from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';

import { FONTS } from 'styles/font/globals';

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 0.7em;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${FONTS.medium};
`;

export const Subsidiary = styled.h1`
  font-size: 0.65em;
  color: ${({ theme }) => theme.font.color.primary};
  margin-top: 2px;
`;

export const Card = styled.li`
  position: relative;
  width: calc((100% / 3) - 15px);
  border-radius: 6px;
  border: 1.2px solid ${({ theme }) => theme.font.color.primary};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  margin-top: 15px;

  ${({ isSelected }: { isSelected: boolean }) =>
    isSelected && `box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);`};

  &:not(:nth-child(3n)) {
    margin-right: 15px;
  }
`;

export const InputPoints = styled.input`
  width: 100px;
  padding: 0.5em;
  border-radius: 0;
  border: none;
  border: 1.3px solid #707070;
  text-align: center;
  color: #707070;
  font-size: 0.9em;
  margin-top: 3px;
  font-family: ${FONTS.medium};

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export const AvatarNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  ${Name}, ${Subsidiary} {
    margin-left: 10px;
  }
`;

export const InputWrapper = styled.div`
  text-align: center;

  span {
    font-size: 0.8em;
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

const iconStyle = css`
  fill: #193f4e;
  font-size: 1.2em;
  position: absolute;
  right: 2px;
  top: 2px;
  cursor: pointer;
`;

export const SelectIcon = styled(AiOutlineCheckCircle)`
  ${iconStyle};
`;

export const SelectedIcon = styled(AiFillCheckCircle)`
  ${iconStyle}
`;
