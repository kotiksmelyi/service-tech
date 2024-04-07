import { FC, useEffect, useState } from 'react';
import { Gallery, ThumbnailImageProps } from 'react-grid-gallery';
import { ImageGridProps } from './types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './image-grid.styles.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Flex } from 'antd';
import Tag from '@shared/ui/tag/tag';

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

    //TODO ТИПЫ ДЛЯ КАРТИНКИ (ДОБАВИТЬ id, name и всё, что с бэка приходит, я хз как, но добавить)

    return (
      <div className="ui-image-grid-item">
        <div className="ui-image-grid-item-overlay">
          <Flex vertical justify="space-between">
            <Flex gap={8}>
              <Checkbox checked={props.item.isSelected} onChange={() => handleSelect(props.index)}></Checkbox>
              <h5>{props.item.name}</h5>
            </Flex>
            <Flex>
              {props.item?.tags?.map((e) => (
                <Tag name={e.title} key={Math.random()} />
              ))}
            </Flex>
          </Flex>
        </div>
        <LazyLoadImage
          onClick={() => navigate(`/${props.item.id}`)}
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
