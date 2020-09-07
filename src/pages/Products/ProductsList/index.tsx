import React, { useEffect } from 'react';
import { Product } from 'services/products/interfaces';

import {
  Container,
  List,
  ProductContainer,
  Logo,
  Details,
  BodyDetails,
  Tags,
  Tag,
  ProductType,
  ProductName,
  ProductDescription,
  Actions,
} from './styles';

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <h3>Produtos</h3>
      <List>
        {products.map(item => (
          <ProductContainer>
            <Logo>
              <img src={item.pictureUrl} alt="" />
            </Logo>
            <Details>
              <Tags>
                {item.categories.map(category => (
                  <Tag key={`category-${category.id}`}>{category.name}</Tag>
                ))}
              </Tags>
              <BodyDetails>
                <ProductType>{item.type.name}</ProductType>
                <ProductName>{item.name}</ProductName>
                <ProductDescription>{item.description}</ProductDescription>
              </BodyDetails>
              <Actions>
                {item.externalLink && (
                  <a href={item.externalLink} target="_blank" rel="noreferrer">
                    Veja mais
                  </a>
                )}
                {item.pdfFile && (
                  <a href={item.pdfFile} target="_blank" rel="noreferrer">
                    Argumentário de vendas
                  </a>
                )}
              </Actions>
            </Details>
          </ProductContainer>
        ))}
      </List>
    </Container>
  );
};

export default ProductsList;
