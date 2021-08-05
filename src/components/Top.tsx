import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
	width: 100%;
	height: 50px;
	background-color: lightblue;
	display: inline-flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	.menu-style {
		width: auto;
		margin-left: 20px;
		&:hover{
			color: whitesmoke;
		}
	}

	.logo{
		width: auto;
		margin-left: 20px;
		font-size: 1.25rem;
		color: #3367a1;
		cursor: pointer;
	}

	.menu-title {
		width: auto;
		margin-left: 20px;
	}

	.active {
		color: whitesmoke;
	}

	.bold-font {
		font-weight: bold;
	}
`;

export const Top = () => {

	const menuList = [
		{
			url: "champion",
			text: "챔피언 분석"
		},
		{
			url: "statistics",
			text: "통계"
		},
		{
			url: "rank",
			text: "랭킹"
		},
	];
	const [currentMenu, setCurrentMenu] = useState("");
	const router = useRouter();

	const goHome = () => {
		setCurrentMenu("");
		router.push("/");
	}

	return (
		<>
			<Wrapper>
				{
					router.pathname !== "/" && 
					<div className={"logo bold-font"} onClick={goHome}>KYU.GG</div>
				}
				<div className={"menu-title bold-font"}>리그오브레전드</div>
				{
					menuList && 
					menuList.map(( item ) => (
						<Link href={`/menu/${item.url}`} key={item.url}>
							<a>
								<div 
									className={`menu-style ${currentMenu === item.text ? "active" : ""}`} 
									key={item.url} 
									onClick={() => setCurrentMenu(item.text)}
								>
									{item.text}
								</div>
							</a>
						</Link>
					))
				}
			</Wrapper>
		</>
	)
}