import { http } from '@/shared/server/http';
import { useQuery } from '@tanstack/react-query';
import { IMAGES_QUERY_KEY, PICTURE_SEARCH_QUERY_KEY, SIMPLE_SEARCH_QUERY_KEY } from '../constants/search-query-keys';
import { IPageResult } from '@/shared/server/page';

export const useGetImages = () => {
  return useQuery({ queryKey: [IMAGES_QUERY_KEY], queryFn: () => http.get<IPageResult<ISearchImage>>('/search') });
};
export const useGetSimpleSearch = () => {
  return useQuery({ queryKey: [SIMPLE_SEARCH_QUERY_KEY], queryFn: () => http.get('/search') });
};

export const useGetPictureSearch = () => {
  return useQuery({ queryKey: [PICTURE_SEARCH_QUERY_KEY], queryFn: () => http.get('/search') });
};

export const useGetSearchDetail = (id: number) => {
  return useQuery({ queryKey: [SIMPLE_SEARCH_QUERY_KEY], queryFn: () => http.get('/search') });
};
