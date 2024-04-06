import { Flex } from 'antd';
import { FC } from 'react';
import './image-description.styles.scss';

type ImageDescriptionProps = {
  name: string;
  format: string;
  height: number;
  width: number;
  tags?: { value: string; title: string }[];
};

const ImageDescription: FC<ImageDescriptionProps> = ({ ...props }) => {
  return (
    <Flex className='image-description'>
      <Flex vertical>
        <h5>
          Видео
          <span>
            {props.format}, {props.height}x{props.width}
          </span>
        </h5>
      </Flex>
      <Flex>
        {/* {props.tags?.map((tag) => (
          <p key={tag.value}>{tag.title}</p>
        ))} */}
      </Flex>
    </Flex>
  );
};

export default ImageDescription;
