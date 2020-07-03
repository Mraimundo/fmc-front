interface Tag {
  id: number;
  name: string;
}

interface Meta {
  originalName: string;
  extension: string;
}

export interface Media {
  id: number;
  url: string;
  description: string;
  created: string;
  modified: string;
  type: 'document' | 'video' | 'image';
  cover_picture: string;
  tags: Tag[];
  meta: Meta;
  title: string;
}
