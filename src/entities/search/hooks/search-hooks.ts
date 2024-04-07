import { http } from '@shared/server/http';
import { IPageQuery, IPageResult } from '@shared/server/page';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IMAGES_QUERY_KEY, SEARCH_DETAIL, SIMPLE_SEARCH_QUERY_KEY } from '../constants/search-query-keys';
import { ISearchDetail, ISearchImage, ISearchImageQuery } from '../types/search-types';

export const useImageSearch = (params?: IPageQuery) => {
  return useMutation({
    mutationKey: [IMAGES_QUERY_KEY],
    mutationFn: (body: ISearchImageQuery) =>
      http.postForm<IPageResult<ISearchImage>>('/search/photo', body, { params }),
  });
};
export const useSimpleSearch = ({ params }: { params: { text: string; page?: number; size?: number } }) => {
  return useQuery({
    queryKey: [SIMPLE_SEARCH_QUERY_KEY],
    queryFn: () => http.get<IPageResult<ISearchImage>>('/search/text', { params }),
    enabled: false,
  });
};

export const useSearchDetail = (id: number) => {
  return useQuery({
    queryKey: [SEARCH_DETAIL],
    queryFn: () => http.get<ISearchDetail>(`/search/similar/${id}`),
    enabled: Boolean(id),
  });
};
