import { Flex, Image, Typography } from 'antd';
import './search-detail.styles.scss';
import ImageDescription from '@shared/components/image-description/image-description';
import GridCollapse from '@shared/components/grid-collapse/grid-collapse';
import { useSearchDetail } from '@entities/search/hooks/search-hooks';
import { Navigate, useParams } from 'react-router-dom';
import { BASE_URL } from '@shared/server/http';
import { useTranslation } from 'react-i18next';
import { GridDistanceCollapse } from '@shared/components/grid-collapse/grid-distance-collapse';
export const SearchDetail = () => {
  const { id } = useParams();
  const { data } = useSearchDetail(Number(id));
  const { t } = useTranslation();

  if (!id) return <Navigate to="/" />;

  if (!data) return null;

  const imgSrc = `${BASE_URL}/${data.data.image}`;

  return (
    <div className="search-detail">
      <div className="search-detail-fullscreen">
        <Image preview={false} className="search-detail-image" src={imgSrc} />
        <Flex vertical gap={12} className="search-detail-content">
          <ImageDescription
            src={imgSrc}
            name={data.data.name}
            format={data.data.extention}
            height={data.data.height}
            width={data.data.width}
            tags={[]}
          />

          <GridCollapse
            images={data.data?.similar?.map((e) => ({ ...e, src: `${BASE_URL}/${e.image}`, isSelected: false })) || []}
            text={t('Similar photos')}
          />
          <span className="search-detail-title">{t('Places nearby')}</span>
          {Object.entries(data.data.distances || {}).map(([key, value]) => (
            <GridDistanceCollapse
              auto={value.auto}
              public_transport={value.public_transport}
              on_foot={value.on_foot}
              images={data.data.images_of_closest_places[key].map((e) => ({
                ...e,
                src: `${BASE_URL}/media/${e}`,
                isSelected: false,
              }))}
              text={key}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
};
