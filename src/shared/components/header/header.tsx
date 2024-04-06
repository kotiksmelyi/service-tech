import { Flex, Layout } from 'antd';
import Logo from '../../assets/icons/logo.svg?react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import HeaderSvg from '../../assets/mock-images/header.svg?react'

const Header = () => {
  return (
    <Layout.Header className='ui-header'>
      <Flex align="center" justify="space-between" className='h-100'>
        <Link to={"/"} className='header-logo'>
          <Logo />
        </Link>
        {/* TODO: lang switch component */}
        <HeaderSvg />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
