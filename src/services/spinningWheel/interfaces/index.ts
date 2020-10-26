export interface Prize {
  id: number;
  value: string;
}

export interface Spin {
  id: number;
  title: string;
  description: string;
  prizes: Prize[];
}
