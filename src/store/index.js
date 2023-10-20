import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../api/apiSlice";
import getCatalog from '../pages/Catalog/CatalogSlice';


const store = configureStore({
    reducer: {getCatalog, [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;