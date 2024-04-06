import { FC, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { ImageGridProps } from './types';
import './image-grid.styles.scss';

const ImageGrid: FC<ImageGridProps> = ({ data }) => {
  const [images, setImages] = useState(data);

  const handleSelect = (index: number) => {
    const nextImages = images.map((image, i) => (i === index ? { ...image, isSelected: !image.isSelected } : image));
    setImages(nextImages);
  };

  return (
    <div className="ui-image-grid">
      <Gallery images={images} onSelect={handleSelect} />
    </div>
  );
};

export default ImageGrid;
