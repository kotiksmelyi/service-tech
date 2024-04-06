import { Button } from '@/shared/ui/button';
import CameraIcon from '@shared/assets/icons/camera-circle.svg?react';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import UploadIcon from '@shared/assets/icons/upload.svg?react';
import { Col, Flex, UploadFile as IUploadFile, Image, Row, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import { FC, useEffect, useState } from 'react';
import './upload-file.styles.scss';

interface UploadFileProps extends UploadProps {
  value?: { file: IUploadFile; fileList: FileList };
}

const UploadFile: FC<UploadFileProps> = ({ value, ...props }) => {
  const { Dragger } = Upload;

  //   const props: UploadProps = {
  //     name: 'file',
  //     multiple: true,
  //     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  //     onChange(info) {
  //       const { status } = info.file;
  //       if (status !== 'uploading') {
  //         console.log(info.file, info.fileList);
  //       }
  //       if (status === 'done') {
  //         message.success(`${info.file.name} file uploaded successfully.`);
  //       } else if (status === 'error') {
  //         message.error(`${info.file.name} file upload failed.`);
  //       }
  //     },
  //     onDrop(e) {
  //       console.log('Dropped files', e.dataTransfer.files);
  //     },
  //   };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [preview, setPreview] = useState('');
  const handlePreview = async (file: any) => {
    const res = await getBase64(file.originFileObj as RcFile);
    setPreview(res as string);
  };

  useEffect(() => {
    if (value) {
      handlePreview(value.file);
    }
  }, [value]);

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
              <Col sm={12} md={24}>
                <Button className="button">Изменить файл</Button>
              </Col>
              <Col span={24}>
                <Button className="button" htmlType="submit" type="primary" onClick={(e) => e.stopPropagation()}>
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
                <Button className="button" onClick={(e) => e.stopPropagation()}>
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
    </Dragger>
  );
};

export default UploadFile;
