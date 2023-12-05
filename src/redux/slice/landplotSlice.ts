import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlotsApi } from '../../api/landplots'
import { ILandPlot } from '../../data/landplots'

interface IState {
	plotsTotalList: Array<ILandPlot>,
	plotsChosen: string[],
	plotsPriceFiltered: Array<ILandPlot>
}

const initialCurrent: ILandPlot[] = [
	{
		id: 0,
		image: '',
		price: 0,
		square: 0,
		description: ""
	}
]

const initialState: IState = {
	plotsTotalList: [],
	plotsChosen: [],
	plotsPriceFiltered: []
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
		addChosenPlot: (state, action) => {
			state.plotsChosen.unshift(action.payload)
		},
		addFilteredPricePlots: (state, action) => {
			state.plotsPriceFiltered = []
			state.plotsPriceFiltered = action.payload
		},
		clearChosenPlot: (state) => {
			state.plotsChosen = []
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getPlots.fulfilled, (state, action) => {
			state.plotsTotalList = action.payload
		})
	}
})

export const {
	addChosenPlot,
	clearChosenPlot,
	addFilteredPricePlots
} = landplotSlice.actions
export default landplotSlice.reducer