import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';
import vueLogo from '../../assets/images/vue';
import graphQlLogo from '../../assets/images/graphQl';
import mongoDbLogo from '../../assets/images/mongoDB';
import nodeJSLogo from '../../assets/images/node';
import sequelizeLogo from '../../assets/images/sequelize';

const StyledDiv = styled.div`
  @media (min-width: 1000px) {
    height: 300px;
  }

  @media (max-width: 1000px) {
    padding: 50px 0;
  }
`;

const StyledTitle = styled.p`
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: 300;
  color: white;

  @media (min-width: 1000px) {
    margin-left: 100px;
    z-index: 99999;
  }

  @media (max-width: 1000px) {
    text-align: center;
    letter-spacing: 8px;
  }
`;

const SkillsContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SkillContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 10px;
`;

export default () => (
  <StyledDiv>
    <StyledTitle>Skills</StyledTitle>
    <SkillsContainer>
      <InnerContainer>
        <SkillContainer>
          <Skill
            name="NodeJS"
            logo={nodeJSLogo}
            link="https://www.nodejs.org/en/"
          />
        </SkillContainer>
        <SkillContainer>
          <Skill
            name="GraphQL"
            logo={graphQlLogo}
            link="https://graphql.org/"
          />
        </SkillContainer>
        <SkillContainer>
          <Skill name="Sequelize" logo={sequelizeLogo} link="http://docs.sequelizejs.com" />
        </SkillContainer>
        <SkillContainer>
          <Skill name="VueJS" logo={vueLogo} link="https://vuejs.org" />
        </SkillContainer>
        <SkillContainer>
          <Skill
            name="mongoDB"
            logo={mongoDbLogo}
            link="https://www.mongodb.com/"
          />
        </SkillContainer>
      </InnerContainer>
    </SkillsContainer>
  </StyledDiv>
);
