import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlotsApi } from '../../api/landplots'
import { ILandPlot } from '../../data/landplots'

interface IState {
	plotsTotal: number,
	plotsChosen: Array<ILandPlot>
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

const landplotSlice = createSlice({
	name: 'landplots',
	initialState,
	reducers: {
		changeCurrent: (state, action) => {
			state.plotsTotal = action.payload
			state.plotsChosen = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getPlots.fulfilled, (state, action) => {
			state.plotsChosen = action.payload[0]
			state.plotsTotal = action.payload.length
		})
	}
})

export const { changeCurrent } = landplotSlice.actions
export default landplotSlice.reducer