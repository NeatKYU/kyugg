import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	background-color: lightblue;
	.contents {
		text-align: center;
		line-height: 100px;
	}

`;

export const Footer = () => {

	return (
		<Wrapper>
			<div className={"contents"}>
				<span>Copyright 2021 KYU.GG All right reserved.</span>
			</div>
		</Wrapper>
	)
}