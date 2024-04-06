import { FC, useEffect, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { ImageGridProps } from './types';
import './image-grid.styles.scss';

const ImageGrid: FC<ImageGridProps> = ({ ...props }) => {
  const [images, setImages] = useState(props.images);

  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

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
