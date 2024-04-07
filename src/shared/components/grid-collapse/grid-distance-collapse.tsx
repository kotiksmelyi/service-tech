import { Flex } from 'antd';
import { FC, useState } from 'react';
import ImageGrid from '../image-grid/image-grid';
import { ImageGridProps } from '../image-grid/types';
import './grid-distance-collapse.styles.scss';
import Arrow from '../../assets/icons/arrow-down.svg?react';
import AutoIcon from '@shared/assets/icons/car.svg?react';
import HumanIcon from '@shared/assets/icons/human.svg?react';
interface Props extends ImageGridProps {
  text: string;
  auto: string;
  public_transport: string;
  on_foot: string;
}

export const GridDistanceCollapse: FC<Props> = ({ text, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex vertical className="grid-collapse">
      <Flex gap={6} align={'center'} onClick={() => setOpen(!open)} className="grid-collapse-header">
        <div>
          <span>{text}</span>
          <span className="distance">
            <span>
              <AutoIcon /> {props.auto}
            </span>
            <span>
              <HumanIcon /> {props.on_foot}
            </span>
          </span>
          <Arrow width={18} style={{ transform: `rotate(${open ? 180 : 0}deg)` }} />
        </div>
      </Flex>
      <ImageGrid {...props} maxRows={open ? undefined : 1} />
    </Flex>
  );
};
