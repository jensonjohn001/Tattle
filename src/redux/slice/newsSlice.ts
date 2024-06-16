import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils/constants';
import type { RootState } from '../store'
import axios from 'axios';

// Define a type for the slice state
interface NewsState {
    isLoading: boolean;
    newsData: NewsApiResponse | null;
    isError: boolean;
}

// Define the initial state using that type
const initialState: NewsState = {
    isLoading: false,
    newsData: null,
    isError: false,
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}


export const fetchNews = createAsyncThunk('fetchData', async () => {
    try {
        const url = API.BaseURL + API.TopHeadlines + API.ParamApiKey + API.ApiKey
        //const response = await fetch(url);
        const response = await axios.get<NewsApiResponse>(url);
        console.log('Fetch news request: ', response.request.responseURL);
        return response.data;
    } catch (error) {
        console.log('Fetch news error: ', error);
        throw error;
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.newsData = action.payload;
                console.log('Fetch news fulfilled: ', action.payload);
            })
            .addCase(fetchNews.rejected, (state, action) => {
                console.log('Fetch news rejected action: ', action);
                state.isLoading = false;
                state.isError = true;
            });
    },
});


// Other code such as selectors can use the imported `RootState` type
export const selectNews = (state: RootState) => state.news

export default newsSlice.reducer;
