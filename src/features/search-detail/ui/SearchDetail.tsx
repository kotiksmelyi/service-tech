import { Flex, Image } from 'antd';
import './search-detail.styles.scss';
import ImageDescription from '@shared/components/image-description/image-description';
import GridCollapse from '@shared/components/grid-collapse/grid-collapse';
export const SearchDetail = () => {
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
    <div className="search-detail">
      <div className="search-detail-fullscreen">
        <Image
          preview={false}
          className="search-detail-image"
          src={
            'https://s3-alpha-sig.figma.com/img/e14c/d947/35bffc5ed115c917f1fe2a89c1b49bd6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giwUGOS~Nf0coWqzxeeRAUpHLmo2ylrk0qwmCAcUqe5RY1MTbQo3DyDfvomQLMaRDzsWPdE7I1N4wwFfbaSDVDpD~fwZq25IDNVMmW7L0LldJBRMx69PApAbdUzjQ30uXUGkX3x~Bbs9qevSHE3ykV8UidGjbQG9w9HoG1t77W5B9TrACU1cKd4sL4JMq6SHr~iMw~hNyjNjwx4Ce82jAriQcBwtFOeLhICwFzcuCCU2gWOUVh8v5V3Kp79mWChGZke7kj9N4Ubf6eI~VFW2Lh2K3njAqHwF238P9GB~-k3WHPvG-gCUIWUG3fdwfHyxO08hXU2EXIXp8px7CCy1Zg__'
          }
        />
        <Flex vertical gap={12} className='search-detail-content'>
          <ImageDescription
            src={
              'https://s3-alpha-sig.figma.com/img/e14c/d947/35bffc5ed115c917f1fe2a89c1b49bd6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giwUGOS~Nf0coWqzxeeRAUpHLmo2ylrk0qwmCAcUqe5RY1MTbQo3DyDfvomQLMaRDzsWPdE7I1N4wwFfbaSDVDpD~fwZq25IDNVMmW7L0LldJBRMx69PApAbdUzjQ30uXUGkX3x~Bbs9qevSHE3ykV8UidGjbQG9w9HoG1t77W5B9TrACU1cKd4sL4JMq6SHr~iMw~hNyjNjwx4Ce82jAriQcBwtFOeLhICwFzcuCCU2gWOUVh8v5V3Kp79mWChGZke7kj9N4Ubf6eI~VFW2Lh2K3njAqHwF238P9GB~-k3WHPvG-gCUIWUG3fdwfHyxO08hXU2EXIXp8px7CCy1Zg__'
            }
            name={'Крутые Бобры'}
            format={'JPG'}
            height={240}
            width={500}
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
