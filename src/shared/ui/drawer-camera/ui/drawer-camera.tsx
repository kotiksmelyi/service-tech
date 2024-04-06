import { Button } from '@shared/ui/button';
import { Drawer } from 'antd';
import cn from 'classnames';
import { FC, useRef } from 'react';
import Webcam from 'react-webcam';
import './drawer-camera.styles.scss';
import { base64ToFile } from '@shared/helpers/base64ToFile';

interface Props {
  open: boolean;
  onClose: () => void;
  onPicture: (e: { file: File; fileList: FileList[] }) => void;
}
export const DrawerCamera: FC<Props> = ({ open, onClose, onPicture }) => {
  const ref = useRef<Webcam | null>(null);

  const takePhoto = async () => {
    const res = ref.current?.getScreenshot();
    const file = await base64ToFile(res || '', 'photo.jpg');
    onPicture({ file, fileList: [file] });
    onClose();
  };

  return (
    <Drawer size="large" placement={'bottom'} onClose={onClose} open={open} className={cn('drawer-camera')}>
      <div className="camera-wrapper">
        <Webcam className="camera" ref={ref} screenshotFormat="image/jpeg"></Webcam>
        <Button
          onClick={() => {
            takePhoto();
          }}
          className="take-picture"
          type="primary"
        >
          Сделать фото
        </Button>
      </div>
    </Drawer>
  );
};
