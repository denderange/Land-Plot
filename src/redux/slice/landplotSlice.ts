import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlotsApi } from '../../api/landplots'
import { LandPlots } from '../../data/landplots'

interface IState {
	plotsTotal: number,
	plotsChosen: Array<LandPlots>
}

const initialState: IState = {
	plotsTotal: 0,
	plotsChosen: []
}

export const getPlots = createAsyncThunk(
	'getPlots',
	async () => {
		const response = await getPlotsApi()

		return await response.json()
	}
)

export const landplotSlice = createSlice({
	name: 'landplots',
	initialState,
	reducers: {
		changeCurrent: (state, action) => {
			state.plotsTotal = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getPlots.fulfilled, (state, action) => {
			state.plotsChosen = action.payload
			state.plotsTotal = action.payload.length
		})
	}
})

export const { changeCurrent } = landplotSlice.actions
export default landplotSlice.reducer