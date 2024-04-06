import { Collapse, CollapseProps, Flex } from 'antd';
import { FC, useState, version } from 'react';
import ImageGrid from '../image-grid/image-grid';
import { ImageGridProps } from '../image-grid/types';
import './grid-collapse.styles.scss'
import Arrow from '../../assets/icons/arrow-down.svg?react';

interface Props extends ImageGridProps {
  text: string;
}

const GridCollapse: FC<Props> = ({ text, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex vertical className='grid-collapse'>
      <Flex gap={6} align={'center'} onClick={() => setOpen(!open)} className='grid-collapse-header'>
        {text}<Arrow width={18} style={{ transform: `rotate(${open ? 180 : 0}deg)` }}/>
      </Flex>
      <ImageGrid {...props} maxRows={open ? undefined : 1} />
    </Flex>
  );
};

export default GridCollapse;
