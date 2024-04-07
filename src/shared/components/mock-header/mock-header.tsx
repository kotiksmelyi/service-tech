import { Flex } from 'antd';
import './mock-header.styles.scss';
import { useTranslation } from 'react-i18next';

const MockHeader = () => {
  const { t } = useTranslation();
  return (
    <Flex vertical className="mock-header">
      <ul>
        <li>{t('Home')}</li>
        <li>●</li>
        <li>{t('Projects')}</li>
        <li>●</li>
        <li>{t('Photobank')}</li>
      </ul>
      <h4>{t('Photos')}</h4>
      <p className="paragraph">{t('About detail')}</p>
    </Flex>
  );
};

export default MockHeader;
