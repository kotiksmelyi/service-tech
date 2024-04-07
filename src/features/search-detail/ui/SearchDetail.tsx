import { Flex, Image } from 'antd';
import './search-detail.styles.scss';
import ImageDescription from '@shared/components/image-description/image-description';
import GridCollapse from '@shared/components/grid-collapse/grid-collapse';
import { useSearchDetail } from '@entities/search/hooks/search-hooks';
import { Navigate, useParams } from 'react-router-dom';
import { BASE_URL } from '@shared/server/http';
export const SearchDetail = () => {
  const { id } = useParams();
  const { data } = useSearchDetail(Number(id));

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
            images={data.data.similar.map((e) => ({ ...e, src: `${BASE_URL}/${e.image}`, isSelected: false })) || []}
            text={'Похожие фото'}
          />
          <GridCollapse images={[]} text={'Места рядом'} />
        </Flex>
      </div>
    </div>
  );
};
