import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchLayout } from '../../../pages/search/search-layout';
import { DetailPage } from '../../../pages/detail/detail-page';
import SimpleSearch from '../../../pages/search/simple-search';
import SearchPhoto from '../../../pages/search/search-photo';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SearchLayout />}>
          <Route path="/" element={<SimpleSearch />}></Route>
          <Route path="/photo-search" element={<SearchPhoto />}></Route>
        </Route>
        <Route path="/:id" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
