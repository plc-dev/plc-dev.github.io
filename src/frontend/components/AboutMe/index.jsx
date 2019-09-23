import React from 'react';
import styled from 'styled-components';
import topLeft from '../../assets/images/topLeft';
import black from '../../assets/themes/black';
import logo from '../../assets/images/logo';
import topMiddle from '../../assets/images/topMiddle';
import mobileBG from '../../assets/images/mobileBG';
import {
	slideFromLeft,
	slideFromRight,
	slideFromBottom,
	bounce,
} from '../../assets/animations';

const StyledDiv = styled.div`
	color: ${black};

	@media (min-width: 1000px) {
		height: 100vh;
	}

	@media (max-width: 1000px) {
		background: url(${mobileBG}) no-repeat;
		background-size: 100% 100%;
		background-attachment: fixed;
		background-position: center;
		padding-bottom: 30px;
		padding-top: 50px;
	}
`;

const GridContainer = styled.div`
	@media (min-width: 1000px) {
		display: grid;
		grid-template-areas: 'wrapper logo' 'wrapper logo';
		grid-auto-rows: 1fr;
		grid-auto-columns: 2fr 1fr;
		width: 100%;
		position: relative;
		top: 50%;
		transform: translateY(-65%);
	}
`;

const TopLeftBG = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 340px;
    height: 150px;
    background: url('${topLeft}') no-repeat;
    background-size: 100% 100%;
    z-index: -2;
  }
`;

const Container = styled.div`
	@media (min-width: 1000px) {
		grid-area: nameAndPos;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 550px;
		margin: auto;
	}

	@media (max-width: 1000px) {
		width: 80%;
		margin: 50px auto 100px auto;
		text-align: center;
	}

	@media (max-width: 500px) {
		width: 90%;
		margin: 50px auto;
	}
`;

const NameContainer = styled.div`
	letter-spacing: 5px;
	letter-spacing: 0.2em;
	animation: ${slideFromLeft} 1s ease;

	@media (max-width: 1000px) {
		font-size: 1.8em;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 500px) {
		font-size: 1.3em;
		margin: 0 auto;
	}

	@media (min-width: 1000px) {
		font-size: 2.5em;
		grid-area: name;
	}
`;

const Position = styled.div`
	font-size: 1.5em;
	letter-spacing: 0.1em;
	animation: ${slideFromRight} 1s ease;

	@media (max-width: 1000px) {
		font-size: 1em;
		margin: 0;
	}

	@media (max-width: 500px) {
		margin: 0 auto;
	}
`;

const LogoContainer = styled.div`
	width: 300px;
	height: 300px;
	margin-top: 100px;
	background: url(${logo}) no-repeat;
	background-size: 100% 100%;
	grid-area: logo;
	animation: ${bounce} 1s ease;

	@media (max-width: 1000px) {
		width: 200px;
		height: 200px;
		margin: 0 auto -40px auto;
	}
`;

const AboutMe = styled.div`
	font-size: 18px;
	letter-spacing: 0.1em;
	animation: ${slideFromBottom} 1s ease;
	text-align: justify;

	@media (max-width: 1000px) {
		width: 85%;
		margin: -50px auto 0 auto;
		font-size: 1.2em;
		text-align: center;
	}

	@media (max-width: 500px) {
		margin: 20px auto 40px auto;
		font-size: 1em;
	}

	@media (min-width: 1000px) {
		grid-area: about;
		width: 550px;
		margin: auto;
		font-size: 1.2em;
	}
`;

const BottomBG = styled.div`
	@media (min-width: 1000px) {
		position: absolute;
		background: url(${topMiddle}) no-repeat;
		background-size: 101% 100%;
		bottom: -20px;
		height: 200px;
		z-index: -2;
		width: 100%;
	}
`;

const Wrapper = styled.div`
	grid-area: wrapper;
	height: 120%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const description = `Hey there, my name is Paul Christ and I'm a fifth semester student in the field of Business Informatics, at the HTW Dresden. I am highly interested in new technologies, such as machine learning, deep learning and AI in general. Also, I am working on little IoT applications in my spare time, such as a home-automation-system for my personal use or a hydroponics-system which is monitored and regulated via an arduino mini.

I am currently looking for new opportunities to further expand my practical knowledge in my field of studies. If you want to reach out and connect, check out my info on the bottom!
`;

export default () => (
	<StyledDiv>
		<TopLeftBG />
		<GridContainer>
			<LogoContainer />
			<Wrapper>
				<Container>
					<NameContainer>Paul Christ</NameContainer>
					<Position>Business Informatics Student</Position>
				</Container>
				<AboutMe>{description}</AboutMe>
			</Wrapper>
		</GridContainer>
		<BottomBG />
	</StyledDiv>
);
