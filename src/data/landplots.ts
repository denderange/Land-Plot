

export interface LandPlots {
	id: number;
	image: string;
	price: number;
	square: number;
	description: string;
	[key: string]: any;
}

export const landplotsData: LandPlots[] = [
	{
		id: 0,
		image: '',
		price: 0,
		square: 0,
		description: ""
	}
]