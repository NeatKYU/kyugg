import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import IRON from '../../styles/images/IRON.png';
import BRONZE from '../../styles/images/BRONZE.png';
import SILVER from '../../styles/images/SILVER.png';
import GOLD from '../../styles/images/GOLD.png';
import PLATINUM from '../../styles/images/PLATINUM.png';
import DIAMOND from '../../styles/images/DIAMOND.png';
import MASTER from '../../styles/images/MASTER.png';
import GRANDMASTER from '../../styles/images/GRANDMASTER.png';
import CHALLENGER from '../../styles/images/CHALLENGER.png';
import UNRANKED from '../../styles/images/UNRANKED.png';


const Wrapper = styled.div`
	width: 100%;
	height: auto;
	margin: 0 auto;
	padding: 2rem;
	background-color: lightblue;
	.card {
		width: 80%;
		height: 18.75rem;
		margin: 0 auto;
		display: flex;
		background-color: whitesmoke;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
		.left {
			width: 40%;
			height: 100%;
			display: inline-flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.profile-top {
				width: 100%;
				height: 60%;
				.profile-image {
					width: 10rem;
					height: 10rem;
					margin: 1rem auto;
					background-color: #faeee1;
					border-radius: 70%;
					position: relative;
					img {
						border-radius: 10rem;
					}
				}
			}
			.profile-bottom {
				width: 100%;
				height: 40%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				.profile-text {
					font-size: 2rem;
				}
			}
		}
		.right {
			width: 60%;
			height: 100%;
			display: inline-block;
			text-align: center;
			.tier-rank-image{
				width: 10rem;
				height: 10rem;
				margin: 0.8rem auto;
				position: relative;
			}
			.tier-rank {
				font-size: 1.5rem;
				color: #afeea1;
			}
			.win-lose{
				font-size: 1.5rem;
				margin-top: 1rem;
			}
			.rating {
				font-size: 1.5rem;
				line-height: 1.5;
				span{
					color: pink;
				}
			}
		}
	}
`;

export interface IUserCardProps {
	summonerName: string;
	wins: number;
	lose: number;
	rank: string;
	tier: string;
	iconNumber: number;
	leaguePoints: number;
}

export const UserCard = (props: IUserCardProps) => {

	const {
		summonerName, 
		wins, 
		lose, 
		rank, 
		tier, 
		iconNumber,
		leaguePoints,
	} = props;

	const rating = (wins / (wins+lose) * 100).toFixed(2);
	const LOLdataURL = `http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/${iconNumber || 0}.png`
	const TierImage = tier === 'UNRANKED' ? UNRANKED :
		tier === 'IRON' ? IRON :
		tier === 'BRONZE' ? BRONZE :
		tier === 'SILVER' ? SILVER :
		tier === 'GOLD' ? GOLD :
		tier === 'PLATINUM' ? PLATINUM :
		tier === 'DIAMOND' ? DIAMOND :
		tier === 'MASTER' ? MASTER :
		tier === 'GRANDMASTER' ? GRANDMASTER : CHALLENGER

	return (
		<Wrapper>
			<div className={"card"}>
				<div className={"left"}>
					<div className={"profile-top"}>
						<div className={"profile-image"}>
							<Image src={LOLdataURL} alt="summonerIcon" layout={"fill"}/>
						</div>
					</div>
					<div className={"profile-bottom"}>
						<div className={"profile-text"}>
							{summonerName}
						</div>
					</div>
				</div>
				<div className={"right"}>
					<div className={"tier-rank-image"}>
						<Image src={TierImage} layout={"fill"} alt={"tierIcon"}/>
					</div>
					<div className={"tier-rank"}>
						{tier} {rank} {leaguePoints}LP
					</div>
					<div className={"win-lose"}>
						{wins ?? 0}승 / {lose ?? 0}패
					</div>
					<div className={"rating"}>
						승률: <span>{isNaN(Number(rating)) ? "0" : rating}%</span>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

UserCard.prototype = {
	summonerName: PropTypes.string.isRequired,
	iconNumber: PropTypes.number.isRequired,
	wins: PropTypes.number,
	lose: PropTypes.number,
	rank: PropTypes.string,
	tier: PropTypes.string,
	leaguePoints: PropTypes.number,
}