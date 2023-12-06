import { createSlice } from '@reduxjs/toolkit'
import { landplots } from '../../data/db'
import { ILandPlot } from '../../data/landplots'

interface IState {
	plotsTotalList: Array<ILandPlot>,
	plotsChosen: string[],
	plotsPriceFiltered: number[]
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
	plotsTotalList: landplots,
	plotsChosen: [],
	plotsPriceFiltered: []
}

const landplotSlice = createSlice({
	name: 'landplots',
	initialState,
	reducers: {
		addChosenPlot: (state, action) => {
			state.plotsChosen.unshift(action.payload)
		},
		removeChosenPlot: (state, action) => {
			state.plotsChosen = state.plotsChosen.filter((item) => item !== action.payload)
		},
		addFilteredPricePlots: (state, action) => {
			state.plotsPriceFiltered = []
			state.plotsPriceFiltered = action.payload
		},
		clearChosenPlot: (state) => {
			state.plotsChosen = []
		}
	}
})

export const {
	addChosenPlot,
	removeChosenPlot,
	clearChosenPlot,
	addFilteredPricePlots
} = landplotSlice.actions

export default landplotSlice.reducer