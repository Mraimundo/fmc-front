import styled  from 'styled-components';
import { Button } from 'components/shared';


export const ExtractButton = styled(Button)`
      padding: 12px 22px;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      border-radius: 0;
      height: auto;
      display: block;
      background:  #65554D;
      margin-top: 10px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;

export const ExtractHeader = styled.div`
      text-align: center;
      strong {
            display: block;
            font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }
`;



