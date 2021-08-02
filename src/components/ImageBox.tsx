import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	.box-style {
		width: 80%;
		height: 200px;
		margin: 0 auto;
		padding: 50px;
		color: whitesmoke;
		/* background-color: lightcyan; */
		font-size: 100px;
		text-align: center;
	}
`;

export const ImageBox = () => {

	return (
		<Wrapper>
			<div className={"box-style"}>
				KYU.GG
			</div>
		</Wrapper>
	)
}