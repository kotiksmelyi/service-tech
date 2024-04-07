import { Flex, Segmented } from 'antd';
import SearchIcon from '../../assets/icons/search.svg?react';
import SearchPhoto from '../../assets/icons/camera.svg?react';
import './search-toggles.styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchToggles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
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
              {t('Simple search')}
            </Flex>
          ),
          value: '/',
        },
        {
          label: (
            <Flex align="center" justify="center">
              <SearchPhoto />
              {t('Search by photo')}
            </Flex>
          ),
          value: '/photo-search',
        },
      ]}
    />
  );
};

export default SearchToggles;
