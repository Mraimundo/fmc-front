import styled from 'styled-components';

import { HEADER_BACKGROUND_COLOR_DROPDOWN } from 'components/Header/constants';

export const HelpMenu = styled.ul`
  visibility: hidden;
  width: 145px;
  position: absolute;
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 3px 5px 6px rgb(0 0 0 / 10%);
  background-color: ${HEADER_BACKGROUND_COLOR_DROPDOWN};
  right: -21px;
  top: 40px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    border-right: 28px solid ${HEADER_BACKGROUND_COLOR_DROPDOWN};
    border-top: 20px solid transparent;
    top: -20px;
    right: 28px;
  }

  > li {
    display: flex;
    align-items: center;
    position: relative;
    height: 30px;
    font-size: 0.9em;
    color: ${({ theme }) => theme.font.color.primary};

    a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: transform 150ms ease;
      font-family: ${({ theme }) => theme.font.fontFamily.medium};
      color: ${({ theme }) => theme.font.color.primary};
    }

    svg,
    div {
      width: 20px;
      height: 20px;
      margin-right: 0.5em;
    }

    svg path {
      fill: ${({ theme }) => theme.font.color.primary};
    }

    &:hover {
      a {
        transform: translateX(3px);
      }
    }

    &:nth-child(1) {
      @keyframes interrogation {
        0% {
          transform: rotate(0);
        }
        50% {
          transform: rotate(40deg);
        }
        100% {
          transform: rotate(-40eg);
        }
      }

      &:hover {
        svg {
          animation: interrogation 250ms ease;
        }
      }
    }

    &:nth-child(2) {
      @keyframes calling {
        0% {
          transform: rotate(0);
        }
        50% {
          transform: rotate(3deg);
        }
        100% {
          transform: rotate(-3deg);
        }
      }

      &:hover {
        svg {
          animation: calling 150ms ease infinite alternate;
        }
      }
    }
  }
`;

export const HelpBallonWrapper = styled.div`
  position: relative;
  margin: 0 0.5em;
  cursor: pointer;

  &:hover {
    ${HelpMenu} {
      visibility: visible;
    }
  }
`;
