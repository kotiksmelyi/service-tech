import { useSimpleSearch } from '@entities/search/hooks/search-hooks';
import FilterIcon from '@shared/assets/icons/filter.svg?react';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import ImageGrid from '@shared/components/image-grid/image-grid';
import SearchToggles from '@shared/components/search-toggles/search-toggles';
import { BASE_URL } from '@shared/server/http';
import { Button } from '@shared/ui/button';
import Input from '@shared/ui/input/input';
import { Flex, Form } from 'antd';
import { useForm, useWatch } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import './search.styles.scss';

const SimpleSearch = () => {
  const [form] = useForm();
  const searchText = useWatch('text', form);
  const { data, isLoading, refetch } = useSimpleSearch({ params: { text: searchText } });

  return (
    <Form form={form} onFinish={refetch}>
      <Flex vertical>
        <Flex gap={8} justify="space-between" wrap="wrap">
          <Flex vertical className="search-toggles-container">
            <SearchToggles />
            <FormItem name={'text'}>
              <Input prefix={<SearchIcon />} placeholder="Введите запрос, название или #тег" />
            </FormItem>
          </Flex>

          <Flex gap={8} className="search-buttons" align="end">
            <Button className="button" block>
              <Flex gap={4} align="center">
                Фильтры
                <FilterIcon />
              </Flex>
            </Button>

            <Button htmlType="submit" className="button" block type="primary" loading={isLoading}>
              <Flex gap={4} align="center">
                Найти
                <SearchIcon />
              </Flex>
            </Button>
          </Flex>
        </Flex>

        {data?.data.items && (
          <ImageGrid
            images={data?.data.items.map((image) => ({
              ...image,
              src: `${BASE_URL}/${image.image}`,
              tags: [],
              key: image.id,
              isSelected: false,
            }))}
          />
        )}
      </Flex>
    </Form>
  );
};

export default SimpleSearch;
