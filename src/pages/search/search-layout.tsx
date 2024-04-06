import { Outlet } from 'react-router-dom';
import Header from '../../shared/components/header/header';
import Footer from '../../shared/components/footer/footer';
import { Layout } from 'antd';
import MockHeader from '../../shared/components/mock-header/mock-header';
import './search.styles.scss';

export const SearchLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <MockHeader />
      <Layout.Content className="search-layout-content">
        <Outlet />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};
