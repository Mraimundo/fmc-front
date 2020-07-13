import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 0.8em;
  color: #193b4e;
  font-family: ${FONTS.regular};
`;

export const Subsidiary = styled.h1`
  font-size: 0.75em;
  color: #193b4e;
`;

export const Card = styled.li`
  width: calc((100% / 3) - 15px);
  border-radius: 6px;
  border: 1.2px solid #193b4e;
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

  input {
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
    color: #193b4e;
  }
`;
