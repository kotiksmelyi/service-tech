import { Col, Flex, Form, Row } from 'antd';
import { useForm, useWatch } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import ImageGrid from '@shared/components/image-grid/image-grid';
import SearchToggles from '@shared/components/search-toggles/search-toggles';
import UploadImage from '@shared/ui/upload-image/upload-image';
import './search.styles.scss';
import { usePostImages } from '@entities/search';
import { getOriginFile } from '@shared/helpers/getOriginFile';
import { BASE_URL } from '@shared/server/http';

const SearchPhoto = () => {
  const [form] = useForm();
  const { mutate, data: images } = usePostImages({ page: 1, size: 50 });

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
                <UploadImage />
              </FormItem>
            </Form>
          </Flex>
        </Col>
        <Col xs={24} md={4} className="upload-hint">
          <p>Сделайте или загрузите фото.</p>
          <p>Умный поиск составит коллекцию похожих изображений.</p>
        </Col>
      </Row>
      <ImageGrid
        images={images?.data.items.map((image) => ({ ...image, src: `${BASE_URL}/${image.image}`, isSelected: false }))}
      />
    </Flex>
  );
};

export default SearchPhoto;
