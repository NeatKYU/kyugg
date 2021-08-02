import styled from 'styled-components';
import React, {useState} from 'react';

const Input = styled.div`
	width: 100%;
	height: 50px;
	.input-box {
		width: 50%;
		min-width: 300px;
		height: 100%;
		margin: 0 auto;
		background-color: whitesmoke;
	}
	input {
		width: 85%;
		height: 100%;
		font-size: 18px;
		padding: 10px;
		display: inline-block;
		background-color: transparent;
		outline: none;
		border: none;
	}
	button {
		width: 15%;
		height: 100%;
		background-color: lightcoral;
		float: right;
		border: none;
		font-size: 18px;
		cursor: pointer;
	}
`;

export const SearchInput = () => {

	const [currentInputValue, setCurrentInputValue] = useState("");

	return (
		<>
			<Input>
				<div className={"input-box"}>
					<input type={"text"} placeholder={"소환사명 검색"} onChange={(e) => setCurrentInputValue(e.target.value)}></input>
					<button type="button" >검색</button>
				</div>
			</Input>
		</>
	)
}