import styled, { css } from 'styled-components';

interface ContainerProps {
  display: string;
}
export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  background: #f4f4f3;
  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  margin-top: 10px;

  ${({ display }) =>
  display === "2" &&
  css`
    background: #fff;
    border-radius:0;
    margin-top: 0px;
  `};

  @media (min-width: 768px) {
    min-width: 50%;
    margin-right: 40px;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 8px auto;
  }

  p {
    flex-shrink: 0;
  }

  span {
    height: 1px;
    flex: 1 1 100%;
    border-bottom: 1px dotted;
    align-self: flex-end;
  }

  > a , > ul {
    display: block;
    padding: 12px 22px;
  }

 
  `;
