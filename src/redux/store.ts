import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import landplot from './slice/landplotSlice'

export const store = configureStore({
	reducer: {
		landplot
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()