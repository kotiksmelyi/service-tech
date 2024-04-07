import { Dropdown, Flex, Layout, Select } from 'antd';
import Logo from '../../assets/icons/logo.svg?react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import HeaderSvg from '../../assets/mock-images/header.svg?react';
import RussianFlag from '@shared/assets/flags/russian.png';
import { LanguageItem } from '@shared/ui/language/language-item';

const Header = () => {
  return (
    <Layout.Header className="ui-header">
      <Flex align="center" justify="space-between" className="h-100">
        <Link to={'/'} className="header-logo">
          <Logo />
        </Link>
        {/* <Dropdown
          menu={{
            items: [
              { key: '1', label: <LanguageItem flag={RussianFlag} name="РУС" /> },
              { key: '2', label: '2' },
            ],
          }}
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <LanguageItem flag={RussianFlag} name="РУС" />
        </Dropdown> */}

        {/* TODO: lang switch component */}
        <HeaderSvg />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
