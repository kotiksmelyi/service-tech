import { Button } from '@shared/ui/button';
import { Col, Flex, Row, Space } from 'antd';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import FilterIcon from '@shared/assets/icons/filter.svg?react';
import ImageGrid from '@shared/components/image-grid/image-grid';
import SearchToggles from '@shared/components/search-toggles/search-toggles';

import Input from '@shared/ui/input/input';
import './search.styles.scss';

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
          <Row gutter={[8, 8]} className="search-buttons">
            <Col xs={24} md={24} lg={12}>
              <Button block>
                <Space>
                  Фильтры
                  <FilterIcon />
                </Space>
              </Button>
            </Col>
            <Col xs={24} md={24} lg={12}>
              <Button block type="primary">
                <Space>
                  Найти
                  <SearchIcon />
                </Space>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <ImageGrid data={images} />
    </Flex>
  );
};

export default SimpleSearch;
