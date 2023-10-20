import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const token = localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null


export const apiSlice = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/shop/',
        prepareHeaders: (headers ) => {
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                return headers
            }
        },
    }),
    tagTypes: ['Products', 'Filters', 'Basket'],
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => `product/`,
            providesTags: ['Products']
        }),
        getFilters: builder.query({
            query: (filter) => `${filter}/`,
            providesTags: ['Filters']
        }),
        addToBasket: builder.mutation({
            query: item => ({
                url: 'basket_item',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['Basket']
        }),

    })
})

export const {useGetProductsQuery, useGetFiltersQuery, useAddToBasketMutation} = apiSlice;