import EnglishFlag from '@shared/assets/flags/english.png';
import RussianFlag from '@shared/assets/flags/russian.png';
import { LanguageItem } from '@shared/ui/language/language-item';
import { Dropdown, Flex, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg?react';
import HeaderSvg from '../../assets/mock-images/header.svg?react';
import './header.styles.scss';

const Header = () => {
  const { i18n } = useTranslation();

  const languageItems = {
    ru: <LanguageItem onClick={() => i18n.changeLanguage('ru')} flag={RussianFlag} name="РУС" />,
    en: <LanguageItem onClick={() => i18n.changeLanguage('en')} flag={EnglishFlag} name="ENG" />,
  };

  const currentLanguage = i18n.language as keyof typeof languageItems;
  return (
    <Layout.Header className="ui-header">
      <Flex align="center" justify="space-between" className="h-100">
        <Link to={'/'} className="header-logo">
          <Logo />
        </Link>
        <div className="language">
          <Dropdown
            menu={{
              items: Object.entries(languageItems)
                .map(([key, label]) => ({ key, label }))
                .filter((i) => i.key !== i18n.language),
            }}
            placement="bottomLeft"
          >
            <a onClick={(e) => e.preventDefault()}>{languageItems[currentLanguage || 'ru']}</a>
          </Dropdown>
        </div>

        {/* TODO: lang switch component */}
        <HeaderSvg />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
