import React from 'react';
import styled from 'styled-components';
import gray from '../../assets/themes/gray';
import bottomMiddle from '../../assets/images/bottomMiddle';
import github from '../../assets/images/github';
import email from '../../assets/images/email';
import resume from '../../assets/images/resume';
import linkedIn from '../../assets/images/linkedIn';
import Item from './Item';

const StyledDiv = styled.div`
	background: ${gray};
	color: white;
	height: auto;
	padding: 20px 0;
`;

const TopBG = styled.div`
	position: relative;
	top: -30px;
	background: url(${bottomMiddle});
	background-size: 100% 100%;
	width: 100%;
	height: 200px;

	@media (max-width: 1000px) {
		display: none;
	}
`;

const Container = styled.div`
	padding: 0 20px;
	display: flex;
	@media screen and (min-width: 1000px) {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		padding: 0;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ItemContainer = styled.div`
	@media screen and (min-width: 1000px) {
		margin: 0 auto;
	}
`;

export default () => (
	<StyledDiv>
		<TopBG />
		<Container>
			<ItemContainer>
				<Item
					data="Github"
					link="https://github.com/plc-dev"
					image={github}
				/>
			</ItemContainer>
			<ItemContainer>
				<Item
					data="LinkedIn"
					link="https://www.linkedin.com/in/paul-christ-9a0842165/"
					image={linkedIn}
				/>
			</ItemContainer>
			<ItemContainer>
				<Item data="paul.l.christ@web.de" image={email} />
			</ItemContainer>
			<ItemContainer>
				<Item
					data="Resume"
					link=""
					image={resume}
				/>
			</ItemContainer>
		</Container>
	</StyledDiv>
);
