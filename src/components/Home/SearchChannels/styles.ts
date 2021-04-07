import styled from 'styled-components';

export const SearchCannel = styled.div`
  width: 48%;
  position: relative;

  @media screen and (max-width: 320px) {
      width: 100%;
    }
`;

export const Cover = styled.div`
  position: relative;

  img {
   width: 100%;
   height: 347px;
    object-fit: cover;
    border-radius: 10px;
    transition: filter 150ms ease;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 14%);

    @media screen and (max-width: 480px) {
      height: 120px;
    }

    @media screen and (max-width: 320px) {
      height: 244px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CoverText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
  color: #65554D;

  margin-bottom: 0.3em;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 0.8em;
  color: #65554D;

`;

export const SearchParticipants = styled.div`
  position: absolute;
  bottom: 26px;
  left: 153px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width:100%;
    height: 36px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3B302A;
    color: #fff;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;

    cursor: pointer;
    padding: 20px;

    border: none;
    transition: all 0.5s;

    &:hover {
      filter: brightness(0.7);
      color: #fff;
    }
  }
  @media screen and (max-width: 934px) {
      left: 84px;
  }

  @media screen and (max-width: 768px) {
      left: 40px;
  }

  @media screen and (max-width: 320px) {
      left: 4px;
  }
`;






