import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Theme } from '../../utils/constants'

// Define a type for the slice state
interface ThemeState {
  value: string
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: Theme.Light,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    light: (state) => {
      state.value = Theme.Light
    },
    dark: (state) => {
      state.value = Theme.Dark
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { light, dark, incrementByAmount } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer