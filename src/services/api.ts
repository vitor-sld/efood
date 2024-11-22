import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Definindo a API
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' // URL base da API
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id: string) => `restaurantes/${id}`
    })
  })
})

// Exportando os hooks gerados automaticamente para os endpoints
export const { useGetFeaturedRestaurantQuery, useGetRestaurantQuery } = api
export default api
