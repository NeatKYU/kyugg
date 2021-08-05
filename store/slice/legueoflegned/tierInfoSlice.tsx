import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../index';

export type TierInfoState = {
	error: boolean,
	loading: boolean,
	pending: boolean,
	entities: [{
		leagueId: string,
		queueType: string,
		tier: string,
		rank: string,
		summonerId: string,
		summonerName: string,
		leaguePoints: number,
		wins: number,
		losses: number,
		veteran: boolean,
		inactive: boolean,
		freshBlood: boolean,
		hotStreak: boolean
	}]
}

const initialState: TierInfoState = {
	"error": false,
	"loading": false,
	"pending": false,
	"entities": [
		{
			"leagueId": "",
			"queueType": "",
			"tier": "",
			"rank": "",
			"summonerId": "",
			"summonerName": "",
			"leaguePoints": 0,
			"wins": 0,
			"losses": 0,
			"veteran": false,
			"inactive": false,
			"freshBlood": false,
			"hotStreak": true
		}
	]
}

export const getTierInfo = createAsyncThunk("summoner/getTier", async(encodeId: string) => {
	console.log("encode id ", encodeId)
	return await axios
	.get(encodeURI(`http://localhost:8000/api/summoner/tier/${encodeId}`))
	.then((response) => {
		console.log("summoner/getTier", response.data)
		return response.data;
	})
	.catch((error) => error);
})


export const tierInfoSlice = createSlice({
	name: "tierInfo",
	initialState,
	reducers: {
		
	},
	extraReducers: builder => {
		builder
			.addCase(getTierInfo.pending, state => {
				state.pending = true;
			})
			.addCase(getTierInfo.fulfilled, (state, {payload}) => {
				state.pending = false;
				state.entities = payload;
			})
			.addCase(getTierInfo.rejected, state => {
				state.pending = false;
				state.error = true;
			})
	}
})

export const tierInfoSelector = (state: RootState) => state.tierInfo;
export default tierInfoSlice.reducer;

// const response = await axios.get("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",{
// 				 headers: {
// 					 "X-Riot-Token": "RGAPI-74681962-9085-4524-94b3-72f9a1dec7f7"
// 				 }
// 			 })