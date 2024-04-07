import { Flex } from 'antd';
import './mock-header.styles.scss';

const MockHeader = () => {
  return (
    <Flex vertical className="mock-header">
      <ul>
        <li>Главная</li>
        <li>●</li>
        <li>Проекты</li>
        <li>●</li>
        <li>Фотобанк</li>
      </ul>
      <h4>Фотографии</h4>
      <p className='paragraph'>
        Наш портал предлагает огромный выбор фотографий высокого качества, подходящих для любых проектов. Найдите
        идеальное изображение для вашего сайта или рекламной кампании с нами.
      </p>
    </Flex>
  );
};

export default MockHeader;
