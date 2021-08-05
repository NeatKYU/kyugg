import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../index';

export type SummonerInfoState = {
	error: boolean,
	loading: boolean,
	pending: boolean,
	entity: {
		id: string,
		accountId: string,
		puuid: string,
		name: string,
		profileIconId: number,
		revisionDate: string,
		summonerLevel: number
	}
}

const initialState: SummonerInfoState = {
	"error": false,
	"loading": false,
	"pending": false,
	"entity": {
		"id": "",
		"accountId": "",
		"puuid": "",
		"name": "",
		"profileIconId": 0,
		"revisionDate": "",
		"summonerLevel": 0,
	}
}

export const getSummonerInfo = createAsyncThunk("summoner/getInfo", async(summonerId: string) => {
	console.log("Slice id ", summonerId)
	return await axios
	.get(encodeURI(`http://localhost:8000/api/summoner/name/${summonerId}`))
	.then((response) => {
		console.log("summoner/getInfo", response)
		return response.data
	})
	.catch((error) => error);
})


export const summonerInfoSlice = createSlice({
	name: "summonerInfo",
	initialState,
	reducers: {
		
	},
	extraReducers: builder => {
		builder
			.addCase(getSummonerInfo.pending, state => {
				state.pending = true;
			})
			.addCase(getSummonerInfo.fulfilled, (state, {payload}) => {
				state.pending = false;
				state.entity = payload;
			})
			.addCase(getSummonerInfo.rejected, state => {
				state.pending = false;
				state.error = true;
			})
	}
})

export const summonerInfoSelector = (state: RootState) => state.summonerInfo;
export default summonerInfoSlice.reducer;

// const response = await axios.get("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",{
// 				 headers: {
// 					 "X-Riot-Token": "RGAPI-74681962-9085-4524-94b3-72f9a1dec7f7"
// 				 }
// 			 })