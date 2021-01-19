import { Product } from 'state/modules/points-simulator/interfaces';
import { fakeFormatDollars as format } from 'util/points';

interface Props {
  product: Product;
}

export default (props: Props) => {
  const { product } = props;

  const {
    name: productName,
    type: { name: typeName },
    revenues,
    pog,
    stock,
    simulationData,
  } = product;

  const revenuesGoal = format(revenues.goalInDollar, 0, 0);
  const revenuesRealized = format(revenues.realizedInDollar, 0, 0);
  const pogGoal = format(pog.goalInDollar, 0, 0);
  const pogRealized = format(pog.realizedInDollar, 0, 0);
  const stockRealizedDollar = format(stock.inDollar, 0, 0);
  const stockRealizedKg = format(stock.inKilosPerLiter, 0, 0);

  const unitValueTyped = format(simulationData.unitValueInDollar);
  const revenuesTyped = format(simulationData.revenuesInKilosPerLiter);
  const pogTyped = format(simulationData.pogInKilosPerLiter);
  const revenuesInDollarCalculated = format(simulationData.revenuesInDollar);

  return `
    <tr style="background: #dad8d9; height: 45px;">
      <td style="vertical-align: middle; padding-left: 4px;">
        <div style="">
          <span style="display: block;">${typeName}</span>
          <strong>${productName}</strong>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="">
          <span style="display: block;">Objetivo: ${revenuesGoal}</span>
          <span style="color: #35a22c;">Realizado: ${revenuesRealized}</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="">
          <span style="display: block;">Objetivo: ${pogGoal}</span>
          <span style="color: #35a22c;">Realizado: ${pogRealized}</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="">
          <span style="display: block;">${stockRealizedKg} KG/L</span>
          <span style="color: #35a22c;">${stockRealizedDollar} US$</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="border-radius: 4px; background: #fff; width: 80px; height: 25px;">
          <span style="display: block; padding: 5px 2px;">${unitValueTyped}</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="border-radius: 4px; background: #fff; width: 80px; height: 25px;">
          <span style="display: block; padding: 5px 2px;">${revenuesTyped}</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="border-radius: 4px; background: #fff2f2; width: 80px; height: 25px;">
          <span style="display: block; padding: 5px 2px;">${revenuesInDollarCalculated}</span>
        </div>
      </td>
      <td style="vertical-align: middle;">
        <div style="border-radius: 4px; background: #fff; width: 80px; height: 25px;">
          <span style="display: block; padding: 5px 2px;">${pogTyped}</span>
        </div>
      </td>
    </tr>
  `;
};
