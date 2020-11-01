export interface Prize {
  id: number;
  value: string;
  winner: boolean;
}

export interface Spin {
  id: number;
  title: string;
  description: string;
  prizes: Prize[];
}
