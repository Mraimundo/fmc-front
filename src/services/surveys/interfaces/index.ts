export interface Surveys {
  id: number;
  title: string;
  summary: string;
  picture: string;
  croped_picture: string;
  body: string;
  report_category_id: number;
  created: string;
  modified: string;
  mobile_picture: string;
  cover: string;
  mobile_cover: string;
  banner: string;
  mobile_banner: string;
  file: string;
  display_option: string;
  start_date_to_view: string;
  end_date_to_view: string;
  file_url: string;
  file_name: string;
  category: {
    id: number;
    name: string;
  };
}
