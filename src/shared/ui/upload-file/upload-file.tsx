import { Upload, Image, UploadFile as IUploadFile, UploadProps } from 'antd';
import { FC, Fragment } from 'react';
import './upload-file.styles.scss';

interface UploadFileProps extends UploadProps {
  buttons?: React.ReactNode[];
  value?: { file: IUploadFile , fileList: FileList[] };
}

const UploadFile: FC<UploadFileProps> = ({ buttons, value, ...props }) => {
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

  console.log(value);

  return (
    <Dragger
      showUploadList={false}
      {...props}
      className="ui-upload"
      onChange={(e) => console.log(e)}
      maxCount={1}
      accept="image/png, image/jpeg, image/jpg"
    >
      <p className="ant-upload-text">Загрузите фотографию</p>
      <p className="ant-upload-hint">Нажмите или перетащите файл в эту область</p>
      {
        value && (
        <Image src={value.fileList[0].item.} />
        )
      }
      {buttons && (
        <div className="ant-upload-buttons">
          {buttons?.map((button, index) => (
            <Fragment key={index}>{button}</Fragment>
          ))}
        </div>
      )}
    </Dragger>
  );
};

export default UploadFile;
