import { Col, Flex, Form, Image, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import ImageGrid from '@shared/components/image-grid/image-grid';
import SearchToggles from '@shared/components/search-toggles/search-toggles';
import UploadImage from '@shared/ui/upload-image/upload-image';
import './search.styles.scss';
import { getOriginFile } from '@shared/helpers/getOriginFile';
import { BASE_URL } from '@shared/server/http';
import { useImageSearch } from '@entities/search/hooks/search-hooks';

const SearchPhoto = () => {
  const [form] = useForm();
  const { mutate, data: images, status } = useImageSearch({ page: 1, size: 30 });

  return (
    <Flex vertical>
      <Row gutter={8}>
        <Col xs={24} md={20}>
          <Flex vertical>
            <SearchToggles />
            <Form
              className="upload-wrapper"
              onFinish={(values) => {
                mutate({ file: getOriginFile(values.image.file) });
              }}
              form={form}
            >
              <FormItem name={'image'}>
                <UploadImage isLoading={status === 'pending'} />
              </FormItem>
            </Form>
          </Flex>
        </Col>
        <Col xs={24} md={4} className="upload-hint">
          <p>Сделайте или загрузите фото.</p>
          <p>Умный поиск составит коллекцию похожих изображений.</p>
        </Col>
      </Row>
      {images?.data?.items && (
        <ImageGrid
          images={images?.data.items.map((image) => ({
            ...image,
            src: `${BASE_URL}/${image.image}`,
            key: image.id,
            tags: [],
            isSelected: false,
          }))}
        />
      )}
    </Flex>
  );
};

export default SearchPhoto;
