import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slice/themeSlice'
import newsSlice from './slice/newsSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    news: newsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch