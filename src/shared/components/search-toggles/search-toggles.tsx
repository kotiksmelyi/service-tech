import { Flex, Segmented } from 'antd';
import SearchIcon from '../../assets/icons/search.svg?react';
import SearchPhoto from '../../assets/icons/camera.svg?react';
import './search-toggles.styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchToggles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Segmented
      onChange={(value) => navigate(value)}
      className="search-toggles"
      block
      defaultValue={location.pathname}
      options={[
        {
          label: (
            <Flex align="center" justify="center">
              <SearchIcon />
              Простой поиск
            </Flex>
          ),
          value: '/',
        },
        {
          label: (
            <Flex align="center" justify="center">
              <SearchPhoto />
              Поиск по фото
            </Flex>
          ),
          value: '/photo-search',
        },
      ]}
    />
  );
};

export default SearchToggles;
