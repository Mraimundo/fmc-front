import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HighlightItem = styled.div`
  width: 330px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  cursor: pointer;
  position: relative;
  background-color: #fff;

  img {
    width: 100%;
    height: 310px;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(0.7);
    transition: filter 150ms ease;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 14%);

    @media screen and (max-width: 480px) {
      height: 120px;
    }
  }

  &:hover {
    img {
      filter: brightness(1);
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Cover = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgb(255 255 255 / 0%) 70%, rgb(0 0 0 / 65%));
    z-index: 1;
    border-radius: 10px;
  }
`;

export const CoverText = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
  color: #fff;
  margin-bottom: 0.3em;
`;

export const Created = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 0.8em;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Resume = styled.div`
  padding: 1em;
`;

export const ResumeText = styled.p`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
  font-size: 0.8em;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const KnowMore = styled(Link)`
  text-align: center;
  margin: 1em auto 0 auto;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  text-decoration: none;
  font-size: 0.9em;
  display: block;
`;
