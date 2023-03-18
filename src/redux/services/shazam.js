import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        // '9780615730mshb8b7b110afcb862p17a3cdjsnb96daf3cb4ba',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldCharts: builder.query({ query: () => '/charts/track' }),
  }),
});

export const { useGetWorldChartsQuery } = shazamApi;
