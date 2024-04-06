import { Flex } from 'antd';
import { FC, MouseEvent } from 'react';
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
  // TODO: type
  const download = (e: any) => {
    fetch(e.target.href, {
      method: 'GET',
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${props.name}.${props.format}`);
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex className="image-description" justify="space-between">
      <Flex vertical>
        <h5>
          Видео{' '}
          <span>
            {props.format}, {props.height}x{props.width}
          </span>
        </h5>
        <Flex gap={4}>
          {props.tags?.map((tag) => (
            <Tag name={`#${tag.title}`}>
            </Tag>
          ))}
        </Flex>
      </Flex>
      <Button className="download-button" onClick={(e) => download(e)}>
        Загрузить
        <DownloadButton />
      </Button>
    </Flex>
  );
};

export default ImageDescription;