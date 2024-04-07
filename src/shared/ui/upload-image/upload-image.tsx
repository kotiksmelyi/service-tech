import CameraIcon from '@shared/assets/icons/camera-circle.svg?react';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import UploadIcon from '@shared/assets/icons/upload.svg?react';
import { Button } from '@shared/ui/button';
import { Col, Flex, UploadFile as IUploadFile, Image, Row, Upload, UploadProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import './upload-image.styles.scss';

import { getOriginFile } from '@shared/helpers/getOriginFile';
import { useToggle } from '@shared/hooks/use-toggle';
import { DrawerCamera } from '../drawer-camera';

interface UploadFileProps extends UploadProps {
  value?: { file: IUploadFile; fileList: FileList };
  isLoading?: boolean
}

const UploadFile: FC<UploadFileProps> = ({ value, isLoading, ...props }) => {
  const { Dragger } = Upload;

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [preview, setPreview] = useState('');
  const handlePreview = async (file: any) => {
    const res = await getBase64(getOriginFile(file));
    setPreview(res as string);
  };

  useEffect(() => {
    if (value) {
      handlePreview(value.file);
    }
  }, [value]);

  const { value: openCamera, on: onOpenCamera, off: onCloseCamera } = useToggle(false);

  return (
    <Dragger
      showUploadList={false}
      {...props}
      className="ui-upload"
      maxCount={1}
      accept="image/png, image/jpeg, image/jpg"
    >
      <p className="ant-upload-text">Загрузите фотографию</p>
      <p className="ant-upload-hint">Нажмите или перетащите файл в эту область</p>
      <div className="ant-upload-hint-mobile">
        Сделайте или загрузите фото. Умный поиск составит коллекцию похожих изображений.
      </div>

      {preview && (
        <div className="preview" onClick={(e) => e.stopPropagation()}>
          <Image className="image" width={50} height={50} src={preview} />
          <span>{value?.file.name}</span>
        </div>
      )}
      <div className="buttons">
        <Row gutter={[8, 8]}>
          {value ? (
            <>
              <Col xs={24} sm={24} md={12}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    props.onChange && props.onChange(undefined as any);
                    setPreview('');
                  }}
                  className="button"
                >
                  Изменить файл
                </Button>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Button className="button" htmlType="submit" type="primary" onClick={(e) => e.stopPropagation()} loading={isLoading}>
                  <Flex align="center" gap={8}>
                    Найти
                    <SearchIcon />
                  </Flex>
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} sm={24} md={12}>
                <Button
                  className="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCamera();
                  }}
                >
                  <Flex align="center" gap={8}>
                    <CameraIcon />
                    Сделать фото
                  </Flex>
                </Button>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Button className="button">
                  <Flex align="center" gap={8}>
                    <UploadIcon />
                    Загрузить фото
                  </Flex>
                </Button>
              </Col>
            </>
          )}
        </Row>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <DrawerCamera
          onPicture={(e) => props.onChange && props.onChange(e as any)}
          open={openCamera}
          onClose={onCloseCamera}
        />
      </div>
    </Dragger>
  );
};

export default UploadFile;
