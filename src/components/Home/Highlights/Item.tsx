import React from 'react';
import parse from 'html-react-parser';

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
  return (
    <div style={{ padding: '0 0.3em' }}>
      <HighlightItem>
        <Cover>
          <img src={highlight.picture} alt="" title="" />
          <CoverText>
            <Title>{highlight.title}</Title>
            <Created>publicado em {highlight.created}</Created>
          </CoverText>
        </Cover>
        <Resume>
          <ResumeText>{parse(highlight.resume)}</ResumeText>
          <KnowMore
            to={getHighlightLink(highlight.type, highlight.referenceId)}
          >
            SAIBA MAIS
          </KnowMore>
        </Resume>
      </HighlightItem>
    </div>
  );
};

export default Item;
