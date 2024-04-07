import { Button } from '@shared/ui/button';
import { Flex } from 'antd';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import FilterIcon from '@shared/assets/icons/filter.svg?react';
import ImageGrid from '@shared/components/image-grid/image-grid';
import SearchToggles from '@shared/components/search-toggles/search-toggles';
import Input from '@shared/ui/input/input';
import './search.styles.scss';
import { useSimpleSearch } from '@entities/search/hooks/search-hooks';
import { BASE_URL } from '@shared/server/http';
import { useState } from 'react';

const SimpleSearch = () => {
  const [searchText, setSearchText] = useState<string>('');
  const { data, isLoading, refetch } = useSimpleSearch({ params: { text: searchText } });

  return (
    <Flex vertical>
      <Flex gap={8} justify="space-between" wrap="wrap">
        <Flex vertical className="search-toggles-container">
          <SearchToggles />
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchIcon />}
            placeholder="Введите запрос, название или #тег"
          />
        </Flex>

        <Flex gap={8} className="search-buttons" align="end">
          <Button className="button" block>
            <Flex gap={4} align="center">
              Фильтры
              <FilterIcon />
            </Flex>
          </Button>

          <Button className="button" block type="primary" loading={isLoading} onClick={() => refetch()}>
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
            customOverlay: <div>sjsjsjsjsjsj</div>,
          }))}
        />
      )}
    </Flex>
  );
};

export default SimpleSearch;
