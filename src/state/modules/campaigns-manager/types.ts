export type TextFieldsNames = 'observation' | 'title' | 'description';
export type PointsFieldsNames =
  | 'affordPoints'
  | 'complementaryCrmBudget'
  | 'complementaryAffordPoints'
  | 'complementaryLocalBudget'
  | 'expectedSellIn'
  | 'expectedSellOut';

export interface TextField {
  fieldName: TextFieldsNames;
  value: string;
}

export interface ValueField {
  fieldName: PointsFieldsNames;
  value: number;
}

export interface Errors {
  [key: string]: string;
}
