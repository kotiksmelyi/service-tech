import { Flex } from 'antd';
import { FC } from 'react';
import './image-description.styles.scss';
import { Button } from '@shared/ui/button';
import DownloadButton from '../../assets/icons/download.svg?react';
import Tag from '@shared/ui/tag/tag';

type ImageDescriptionProps = {
  name: string;
  format: string;
  height: number;
  width: number;
  src: string;
  tags?: { value: string; title: string }[];
};

const ImageDescription: FC<ImageDescriptionProps> = ({ ...props }) => {

  return (
    <Flex className="image-description" justify="space-between">
      <Flex vertical>
        <h5>
          {props.name}{' '}
          <span>
            {props.format.toUpperCase()}, {props.height}x{props.width}
          </span>
        </h5>
        <Flex gap={4}>
          {props.tags?.map((tag) => (
            <Tag name={`#${tag.title}`}></Tag>
          ))}
        </Flex>
      </Flex>
      <a href={props.src} download={`image.${props.format}`} target="_blank">
        <Button className="download-button">
          Загрузить
          <DownloadButton />
        </Button>
      </a>
    </Flex>
  );
};

export default ImageDescription;
