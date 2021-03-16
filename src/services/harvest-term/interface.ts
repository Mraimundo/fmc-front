export interface HarvestApi {
  accession_is_required: boolean;
  cover_picture: string;
  description: string;
  end_date: string;
  end_date_view: string;
  establishment_types: any[];
  id: number;
  internal_picture: string;
  regulations: any[];
  roles: any[];
  start_date: string;
  start_date_view: string;
  title: string;
}

export interface Harvest {
  id: number;
  title: string;
}
