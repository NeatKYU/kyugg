import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	.card {
		width: 60%;
		height: 18.75rem;
		margin: 0 auto;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
		.left {
			width: 40%;
			height: 100%;
			background-color: #aaaaaa;
			display: inline-flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.profile-image {
				width: 100%;
				height: 60%;
			}
			.profile-name {
				width: 100%;
				height: 40%;
				text-align: center;
			}
		}
		.right {
			width: 60%;
			height: 100%;
		}
	}
`;

export interface IUserCardProps {
	summonerName: string;
}

export const UserCard = (props: IUserCardProps) => {

	const {summonerName} = props;

	return (
		<Wrapper>
			<div className={"card"}>
				<div className={"left"}>
					<div className={"profile-image"}>
					</div>
					<div className={"profile-name"}>
						{summonerName}
					</div>
				</div>
				<div className={"right"}>
				</div>
			</div>
		</Wrapper>
	)
}

UserCard.prototype = {
	summonerName: PropTypes.string.isRequired,
}