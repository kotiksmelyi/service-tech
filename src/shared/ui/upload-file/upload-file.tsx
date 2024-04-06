import { Upload, UploadProps } from 'antd';
import { FC } from 'react';
import './upload-file.styles.scss';
import Button from '../button/button';

interface UploadFileProps extends UploadProps {
  buttons?: React.ReactNode[];
}

const UploadFile: FC<UploadFileProps> = ({ ...props }) => {
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
  return (
    <Dragger {...props} className="ui-upload" maxCount={1} accept="image/png, image/jpeg, image/jpg">
      <p className="ant-upload-text">Загрузите фотографию</p>
      <p className="ant-upload-hint">Нажмите или перетащите файл в эту область</p>
      <div className="ant-upload-buttons">{props.buttons}</div>
    </Dragger>
  );
};

export default UploadFile;
