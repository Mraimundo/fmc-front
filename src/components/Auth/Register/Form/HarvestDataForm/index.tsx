import React from 'react';
import { Obs, ButtonContainer, Button } from './styles';
import CustomInput from './CustomInput';

const harvestItems = [
  { key: 'harvest.soja', title: 'Soja' },
  { key: 'harvest.milho', title: 'Milho' },
  { key: 'harvest.algodao', title: 'Algodão' },
  { key: 'harvest.arroz_irrigado', title: 'Arroz Irrigado' },
  { key: 'harvest.batata', title: 'Batata' },
  { key: 'harvest.cafe', title: 'Cafe' },
  { key: 'harvest.cana', title: 'Cana' },
  { key: 'harvest.cenoura', title: 'Cenoura' },
  { key: 'harvest.cevada', title: 'Cevada' },
  { key: 'harvest.citrus', title: 'Citrus' },
  { key: 'harvest.feijao', title: 'Feijão' },
  { key: 'harvest.mandioca', title: 'Mandioca' },
  { key: 'harvest.melao', title: 'Melão' },
  { key: 'harvest.tabaco', title: 'Tabaco' },
  { key: 'harvest.tomate', title: 'Tomate' },
  { key: 'harvest.trigo', title: 'Trigo' },
  { key: 'harvest.uva', title: 'Uva' },
];

interface Props {
  handleActionPageButton(): void;
  actived: boolean;
}

const HarvestDataForm: React.FC<Props> = ({
  handleActionPageButton,
  actived,
}) => {
  return (
    <div style={{ display: actived ? 'block' : 'none' }}>
      <Obs>
        Por favor, preencha os dados das áreas dos seus principais cultivos,
        considerando os dados da área total do grupo:
      </Obs>
      {harvestItems.map(item => (
        <CustomInput key={item.key} name={item.key} title={item.title} />
      ))}
      <CustomInput
        name="harvest.outras"
        title="Outras"
        extraInfo="outras_quais"
      />
      <ButtonContainer>
        <Button
          type="button"
          buttonRole="primary"
          onClick={handleActionPageButton}
        >
          Próximo
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default HarvestDataForm;
