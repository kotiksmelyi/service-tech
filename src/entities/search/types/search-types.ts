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
