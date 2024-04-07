import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../shared/components/header/header';
import Footer from '../../shared/components/footer/footer';
import { Layout } from 'antd';
import MockHeader from '../../shared/components/mock-header/mock-header';
import './search.styles.scss';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const SearchLayout = () => {
  const queryClient = useQueryClient();
  const location = useLocation();

  useEffect(() => {
    queryClient.clear();
  }, [location.pathname]);
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
