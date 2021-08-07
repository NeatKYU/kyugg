import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 9.375rem;
	background-color: white;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr 1.5fr;
	grid-template-areas: 
		'c1 c2 c3 c4 c5 c6';
	.game-info {
		grid-area: "c1";
		text-align: center;
	}
	.champion-info {
		grid-area: "c2";
		width: 10rem;
		height: 50%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas: 
			"champ champ spellD rune-main"
			"chanp champ spellF rune-sub";
		.champ {
			grid-area: "champ";
		}
		.spellD {
			grid-area: "spellD";
		}
		.spellF {
			grid-area: "spellF"
		}
		.rune-main {
			grid-area: "rune-main";
		}
		.rune-sub {
			grid-area: "rune-sub";
		}
	}
	.kda-info {
		grid-area: "c3";
	}
	.cs-info {
		grid-area: "c4";
	}
	.item-info {
		grid-area: "c5";
		width: 11rem;
		height: 50%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas: 
			"item1 item2 item3 item4"
			"item5 item6 item7 .";
		.item1-image{
			grid-area: "item1";
		}
		.item2-image{
			grid-area: "item2";
		}
		.item3-image{
			grid-area: "item3";
		}
		.item4-image{
			grid-area: "item4";
		}
		.item5-image{
			grid-area: "item5";
		}
		.item6-image{
			grid-area: "item6";
		}
		.item7-image{
			grid-area: "item7";
		}
	}
	.game-user-info {
		grid-area: "c6";
		.user-card {
			width: 14rem;
			margin: 0 auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas: 
				"user1 user2 user3 user4 user5";
			.user1 {
				grid-area: "user1";
			}
			.user2 {
				grid-area: "user2";
			}
			.user3 {
				grid-area: "user3";
			}
			.user4 {
				grid-area: "user4";
			}
			.user5 {
				grid-area: "user5";
			}
		}
	}
`;

export const MatchCard = () => {

	return (
		<Wrapper>
			<div className={"game-info"}>
				<div>승리</div>
				<div>칼바람 나락</div>
				<div>24:00</div>
				<div>며칠전</div>
			</div>
			<div className={"champion-info"}>
				챔프
			</div>
			<div className={"kda-info"}>
				<div>4 / 4 / 4</div>
				<div>2.00 평점</div>
				<div>트리플킬</div>
			</div>
			<div className={"cs-info"}>
				<div>킬관여 100%</div>
				<div>cs 300(분당cs)</div>
			</div>
			<div className={"item-info"}>
				<div className={"item1-image"}>
					item1
				</div>
				<div className={"item2-image"}>
					item2
				</div>
				<div className={"item3-image"}>
					item3
				</div>
				<div className={"item4-image"}>
					item4
				</div>
				<div className={"item5-image"}>
					item5
				</div>
				<div className={"item6-image"}>
					item6
				</div>
				<div className={"item7-image"}>
					item7
				</div>
			</div>
			<div className={"game-user-info"}>
				<div className={"user-card"}>
					<div className={"user1"}>
						user1
					</div>
					<div className={"user2"}>
						user2
					</div>
					<div className={"user3"}>
						user3
					</div>
					<div className={"user4"}>
						user4
					</div>
					<div className={"user5"}>
						user5
					</div>
				</div>
				<div>vs</div>
				<div className={"user-card"}>
					<div className={"user1"}>
						user1
					</div>
					<div className={"user2"}>
						user2
					</div>
					<div className={"user3"}>
						user3
					</div>
					<div className={"user4"}>
						user4
					</div>
					<div className={"user5"}>
						user5
					</div>
				</div>
			</div>
		</Wrapper>
	)
}