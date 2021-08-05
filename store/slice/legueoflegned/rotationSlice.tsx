import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../index';

export type ChampionRotationState = {
	error: boolean,
	loading: boolean,
	pending: boolean,
	entity: {
		freeChampionIds: ReadonlyArray<number>[],
		freeChampionIdsForNewPlayers: ReadonlyArray<number>[],
		maxNewPlayerLevel: number,
	}
}

const initialState: ChampionRotationState = {
	"error": false,
	"loading": false,
	"pending": false,
	"entity": {
		"freeChampionIds": [],
		"freeChampionIdsForNewPlayers": [],
		"maxNewPlayerLevel": 0
	}
}

export const getRotation = createAsyncThunk("rotation/getRotation", async() => {
	return await axios
	.get("http://localhost:8000/api/champion/rotation")
	.then((response) => {
		console.log("??", response)
		return response.data
	})
	.catch((error) => error);
})


export const rotationSlice = createSlice({
	name: "championRotation",
	initialState,
	reducers: {
		
	},
	extraReducers: builder => {
		builder
			.addCase(getRotation.pending, state => {
				state.pending = true;
			})
			.addCase(getRotation.fulfilled, (state, {payload}) => {
				state.pending = false;
				state.entity = payload;
			})
			.addCase(getRotation.rejected, state => {
				state.pending = false;
				state.error = true;
			})
	}
})

export const rotationSelector = (state: RootState) => state.championRotation;
export default rotationSlice.reducer;

// const response = await axios.get("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",{
// 				 headers: {
// 					 "X-Riot-Token": "RGAPI-74681962-9085-4524-94b3-72f9a1dec7f7"
// 				 }
// 			 })