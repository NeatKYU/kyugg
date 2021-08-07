import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import {
	useAppSelector,
	useAppDispatch,
} from '../../store/hooks';
import {
	getSummonerInfo,
	summonerInfoSelector,
} from '../../store/slice/legueoflegned/summonerInfoSlice'
import {
	getTierInfo,
	tierInfoSelector,
} from '../../store/slice/legueoflegned/tierInfoSlice';

//component
import { UserCard } from '../../src/components/UserCard'
import { MatchCard } from '../../src/components/MatchCard';

const SummonerId = () => {

	const router = useRouter();
	const { summonerId } = router.query;
	const dispatch = useAppDispatch();
	const summonerInfo = useAppSelector(summonerInfoSelector);
	const tierInfo = useAppSelector(tierInfoSelector);
	const [win, setWin] = useState(0);
	const [lose, setLose] = useState(0);
	const [tier, setTier] = useState("UNRANKED");
	const [rank, setRank] = useState("");
	const [leaguePoints, setLeguePoints] = useState(0);

	useEffect(() => {
		if(summonerId){
			dispatch(getSummonerInfo(summonerId.toString()))
		}
	}, [])

	useEffect(() => {
		if(summonerInfo.entity.id){
			dispatch(getTierInfo(summonerInfo.entity.id))
		}
	}, [summonerInfo.entity.id])

	useEffect(() => {
		if(tierInfo.entities[0]){
			setWin(tierInfo.entities[0].wins);
			setLose(tierInfo.entities[0].losses);
			setTier(tierInfo.entities[0].tier);
			setRank(tierInfo.entities[0].rank);
			setLeguePoints(tierInfo.entities[0].leaguePoints)
		} else {
			setWin(0);
			setLose(0);
			setTier("UNRANKED");
			setRank("");
			setLeguePoints(0);
		}
	}, [tierInfo.entities])

	return (
		<div>
			<UserCard 
				summonerName={summonerInfo.entity.name}
				wins={win}
				lose={lose}
				rank={rank}
				tier={tier}
				iconNumber={summonerInfo.entity.profileIconId}
				leaguePoints={leaguePoints}
			/>
			<MatchCard/>
		</div>
	)
}

export default SummonerId;