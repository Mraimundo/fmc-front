export interface Campaign {
  id: number;
  value: string;
  category: string;
  description: string;
  point_date: string;
  created: string;
  campaigns: {
    id: number;
    title: string;
  };
  status: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
}
