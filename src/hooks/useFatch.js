import useSWR from 'swr';

import api from '~/services/api';

export function useFatch(url) {
  const { data, error, mutate } = useSWR(url, async uri => {
    const response = await api.get(uri);
    return response.data;
  });
  return { data, error, mutate };
}
