export interface ImageGridProps {
  data: {
    src: string;
    width: number;
    height: number;
    tags?: { value: string; title: string }[];
    alt?: string;
    isSelected?: boolean;
  }[];
}
