import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlotsApi } from '../../api/landplots'
import { ILandPlot } from '../../data/landplots'

interface IState {
	plotsTotalList: Array<ILandPlot>,
	plotsChosen: string[],
	// plotsCurrent: Array<ILandPlot>,
	// plotsList: Array<ILandPlot>
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
	// plotsCurrent: [],
	// plotsList: []
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
			state.plotsChosen.push(action.payload)
		},

		// addPlot: (state, action) => {
		// 	state.plotsList = state.plotsList.concat({
		// 		id: action.payload.id || 'id-eee',
		// 		image: action.payload.image || 'image-eee',
		// 		price: 555,
		// 		square: 999,
		// 		description: action.payload.description || 'description-eee'
		// 	})
		// }
	},
	extraReducers: (builder) => {
		builder.addCase(getPlots.fulfilled, (state, action) => {
			state.plotsTotalList = action.payload
		})
	}
})

export const { addChosenPlot } = landplotSlice.actions
export default landplotSlice.reducer