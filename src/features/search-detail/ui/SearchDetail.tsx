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
            format={data.data.extetion}
            height={data.data.height}
            width={data.data.width}
            tags={[
              { value: 'Крутые Бобры', title: 'blue' },
              { value: 'Крутые Бобры', title: 'blue' },
              { value: 'Крутые Бобры', title: 'blue' },
            ]}
          />

          <GridCollapse images={images} text={'Похожие фото'} />
          <GridCollapse images={images} text={'Места рядом'} />
        </Flex>
      </div>
    </div>
  );
};
