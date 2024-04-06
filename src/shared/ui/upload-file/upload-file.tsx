import { Upload, Image, UploadFile as IUploadFile, UploadProps } from 'antd';
import { FC, Fragment, useEffect, useState } from 'react';
import './upload-file.styles.scss';
import { RcFile } from 'antd/es/upload';

interface UploadFileProps extends UploadProps {
  buttons?: React.ReactNode[];
  value?: { file: IUploadFile; fileList: FileList };
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
      {preview && (
        <div className="preview" onClick={(e) => e.stopPropagation()}>
          <Image className="image" width={50} height={50} src={preview} />
          <span>{value?.file.name}</span>
        </div>
      )}
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
