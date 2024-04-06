import { Col, Flex, Row } from 'antd';
import './search.styles.scss';
import Input from '../../shared/ui/input/input';
import SearchIcon from '../../shared/assets/icons/search.svg?react';
import ImageGrid from '../../shared/components/image-grid/image-grid';
import SearchToggles from '../../shared/components/search-toggles/search-toggles';
import Button from '../../shared/ui/button/button';

const SimpleSearch = () => {
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
        <Col xs={24} sm={20}>
          <Flex vertical>
            <SearchToggles />
            <Input prefix={<SearchIcon />} placeholder="Введите запрос, название или #тег" />
          </Flex>
        </Col>
        <Col xs={24} sm={4}>
          <Flex className='search-buttons'>
            <Button block>Найти</Button>
            <Button block>Фильтры</Button>
          </Flex>
        </Col>
      </Row>
      <ImageGrid data={images} />
    </Flex>
  );
};

export default SimpleSearch;
