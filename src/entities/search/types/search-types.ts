export interface ISearchImage {
  id: number;
  image: string;
  height: number;
  width: number;
  extention: string;
  tags: string[];
}

export interface ISearchImageQuery {
  file: File;
}

export interface ISearchDetail {
  id: number;
  name: string;
  image: string;
  height: number;
  width: number;
  extention: string;
  tags: string[];
  similar: ISearchImage[];
  distances: Record<string, { auto: string; public_transport: string; on_foot: string }> | null;
  images_of_closest_places: Record<string, string[]> | null;
}
