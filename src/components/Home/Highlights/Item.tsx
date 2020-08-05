import React from 'react';
import parse from 'html-react-parser';

import history from 'services/history';
import { Highlight } from 'state/modules/home/types';
import { getHighlightLink } from 'state/modules/home/utils';
import {
  HighlightItem,
  Cover,
  CoverText,
  Title,
  Created,
  Resume,
  ResumeText,
  KnowMore,
} from './Item.styles';

interface ItemProps {
  highlight: Highlight;
}
const Item: React.FC<ItemProps> = ({ highlight }) => {
  const redirectLink = getHighlightLink(highlight.type, highlight.referenceId);

  return (
    <div style={{ padding: '0 0.3em' }}>
      <HighlightItem>
        <Cover onClick={() => history.push(redirectLink)}>
          <img src={highlight.picture} alt="" title="" />
          <CoverText>
            <Title>{highlight.title}</Title>
            <Created>publicado em {highlight.created}</Created>
          </CoverText>
        </Cover>
        <Resume>
          <ResumeText>{parse(highlight.resume)}</ResumeText>
          <KnowMore to={redirectLink}>SAIBA MAIS</KnowMore>
        </Resume>
      </HighlightItem>
    </div>
  );
};

export default Item;
