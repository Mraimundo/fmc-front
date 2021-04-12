export const getHarvestLabel = (key: string): string => {
  switch (key) {
    case 'soja':
      return 'Soja';
    case 'milho':
      return 'Milho';
    case 'algodao':
      return 'Algodão';
    case 'arroz_irrigado':
      return 'Arroz Irrigado';
    case 'batata':
      return 'Batata';
    case 'cafe':
      return 'Cafe';
    case 'cana':
      return 'Cana';
    case 'cenoura':
      return 'Cenoura';
    case 'cevada':
      return 'Cevada';
    case 'citrus':
      return 'Citrus';
    case 'feijao':
      return 'Feijão';
    case 'mandioca':
      return 'Mandioca';
    case 'melao':
      return 'Melão';
    case 'tabaco':
      return 'Tabaco';
    case 'tomate':
      return 'Tomate';
    case 'trigo':
      return 'Trigo';
    case 'uva':
      return 'Uva';
    default:
      return '';
  }
};
