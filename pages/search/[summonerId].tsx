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

const SummonerId = () => {

	const router = useRouter();
	const { summonerId } = router.query;
	const dispatch = useAppDispatch();
	const summonerInfo = useAppSelector(summonerInfoSelector);
	const tierInfo = useAppSelector(tierInfoSelector);
	const [win, setWin] = useState(0);
	const [lose, setLose] = useState(0);
	const [tier, setTier] = useState("unranked");
	const [rank, setRank] = useState("");

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
		} else {
			setWin(0);
			setLose(0);
			setTier("unranked");
			setRank("");
		}
	}, [tierInfo.entities])

	return (
		<div>
			<div>
				소환사명 : {summonerInfo.entity.name} / {tier} {rank}
			</div>
			<div>
				소환사 레벨 : {summonerInfo.entity.summonerLevel}
			</div>
			<div>
				{win}승 {lose}패
			</div>
			<UserCard summonerName={summonerInfo.entity.name}/>
		</div>
	)
}

export default SummonerId;