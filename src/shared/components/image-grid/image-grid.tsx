import { FC, useEffect, useState } from 'react';
import { Gallery, ThumbnailImageProps } from 'react-grid-gallery';
import { ImageGridProps } from './types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './image-grid.styles.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Flex } from 'antd';
import Tag from '@shared/ui/tag/tag';
import classNames from 'classnames';

const ImageGrid: FC<ImageGridProps> = ({ images, ...props }) => {
  const [selectedImages, setSelectedImages] = useState(images);

  useEffect(() => {
    setSelectedImages(images);
  }, [images]);

  const handleSelect = (index: number) => {
    const nextImages = images.map((image, i) => (i === index ? { ...image, isSelected: !image.isSelected } : image));
    setSelectedImages(nextImages);
  };

  const LazyImageComponent: FC<ThumbnailImageProps> = ({ ...props }) => {
    const { imageProps } = props;
    const navigate = useNavigate();

    return (
      <div onClick={() => navigate(`/${props.item.id}`)} className="ui-image-grid-item">
        <div className="ui-image-grid-item-overlay">
          <Flex vertical justify="space-between">
            <Flex gap={8}>
              <h5 className={'ui-image-grid-item-title'}>{props.item.name}</h5>
            </Flex>
            <Flex>
              {props.item?.tags?.map((e) => (
                <Tag name={e.title} key={Math.random()} />
              ))}
            </Flex>
          </Flex>
        </div>
        <LazyLoadImage
          {...imageProps}
          height={imageProps.style.height}
          width={imageProps.style.width}
          effect="blur"
          placeholderSrc="https://via.placeholder.com/150"
          useIntersectionObserver
        />
      </div>
    );
  };

  return (
    <div className="ui-image-grid">
      <Gallery
        images={selectedImages}
        thumbnailImageComponent={({ ...properties }) => <LazyImageComponent {...properties} />}
        enableImageSelection={false}
        {...props}
      />
    </div>
  );
};

export default ImageGrid;
