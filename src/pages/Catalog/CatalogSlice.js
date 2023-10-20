import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../hooks/http.hook";


const catalogAdapter = createEntityAdapter();

const initialState = catalogAdapter.getInitialState({
    activeCategory: '',
    products: [],
    status: 'idle'
});

export const fetchProduct = createAsyncThunk(
    'catalog/fetchProduct',
    async () => {
        const {request} = useHttp();
        return await request('http://127.0.0.1:8000/shop/product/')
    }
)


const catalogSlice = createSlice({
    name: 'getCatalog',
    initialState,
    reducers: {
        categoryChange: (state, action) => {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, state => {state.status = 'error'})

            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = catalogSlice;
export default reducer;
export const {
    categoryChange,
} = actions;