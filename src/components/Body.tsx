import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { ImageBox } from './ImageBox';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: lightblue;
	.contents {
		width: 80%;
		height: auto;
		min-height: 700px;
		margin: 0 auto;
		/* background-color: lightcoral; */
	}
`;

export const Body = () => {

	return (
		<Wrapper>
			<div className={"contents"}>
				<ImageBox/>
				<SearchInput/>
			</div>
		</Wrapper>
	)
}