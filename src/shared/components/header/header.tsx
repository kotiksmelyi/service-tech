import EnglishFlag from '@shared/assets/flags/english.png';
import RussianFlag from '@shared/assets/flags/russian.png';
import { LanguageItem } from '@shared/ui/language/language-item';
import { Dropdown, Flex, Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg?react';
import HeaderSvg from '../../assets/mock-images/header.svg?react';
import './header.styles.scss';

const Header = () => {
  return (
    <Layout.Header className="ui-header">
      <Flex align="center" justify="space-between" className="h-100">
        <Link to={'/'} className="header-logo">
          <Logo />
        </Link>
        <div className="language">
          <Dropdown
            menu={{
              items: [
                { key: '1', label: <LanguageItem flag={RussianFlag} name="РУС" /> },
                { key: '2', label: <LanguageItem flag={EnglishFlag} name="ENG" /> },
              ],
            }}
            placement="bottomLeft"
            // arrow={{ pointAtCenter: true }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <LanguageItem flag={RussianFlag} name="РУС" />
            </a>
          </Dropdown>
        </div>

        {/* TODO: lang switch component */}
        <HeaderSvg />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
