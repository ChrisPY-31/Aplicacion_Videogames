import { configureStore } from '@reduxjs/toolkit'
import { videoGamesSlice } from './reducer'

export const store = configureStore({
  reducer: {
    videoGames: videoGamesSlice.reducer
  },
})