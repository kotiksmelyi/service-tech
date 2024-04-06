import { Col, Flex, Form, Row } from 'antd';
import { useForm, useWatch } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import ImageGrid from '../../shared/components/image-grid/image-grid';
import SearchToggles from '../../shared/components/search-toggles/search-toggles';
import UploadFile from '../../shared/ui/upload-file/upload-file';
import './search.styles.scss';

const SearchPhoto = () => {
  const [form] = useForm();

  const images = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      width: 320,
      height: 174,
      caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      width: 320,
      height: 212,
      //   tags: [
      //     { value: 'Ocean', title: 'Ocean' },
      //     { value: 'People', title: 'People' },
      //   ],
      alt: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      width: 320,
      height: 212,
    },
  ];

  return (
    <Flex vertical>
      <Row gutter={8}>
        <Col xs={24} md={20}>
          <Flex vertical>
            <SearchToggles />
            <Form className="upload-wrapper" onFinish={console.log} form={form}>
              <FormItem name={'image'}>
                <UploadFile />
              </FormItem>
            </Form>
          </Flex>
        </Col>
        <Col xs={24} md={4} className="upload-hint">
          <p>Сделайте или загрузите фото.</p>
          <p>Умный поиск составит коллекцию похожих изображений.</p>
        </Col>
      </Row>
      <ImageGrid data={images} />
    </Flex>
  );
};

export default SearchPhoto;
