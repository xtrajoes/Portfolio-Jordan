import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider,  SectionSubText } from '../../styles/GlobalComponents';
import { BlogCard, BlogCardContent, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LeftSection } from './ContentsStyles';
import { projects } from '../../constants/constants';

const Contents = (props) => (
  <Section row>
      <LeftSection>
        <SectionTitle main center>
          Akseleran <br/>
          <h6>Phoenix Product B2B Platform (2019)</h6>
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/Aksel.png' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> <h6> Web CMS </h6> </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Akseleran is a P2P or peer-to-peer lending platform in Indonesia that connects SMEs that need loans to develop their businesses with a pool of lenders who have more funds to fund these loans. Akseleran provides business actors with access to capital with competitive interest rates and flexibility in loan tenors, payment models, and collateral inclusion. Acceleration also opens up alternative lending opportunities to Indonesians to get attractive returns and commensurate with the existing risks.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Redesign some interface pages such as Portfolio Summary. Create a new design without some research from user experience. Portfolio Summary for desktop version, Statistics Page for desktop and mobile app version, Coupun Page for mobile app version.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As a User Interface Designer Intern, I’ve been given a task to redesign some of the old pages just as Portfolio Summary. Crafting some new design interfaces for Statistics Pages for desktop and mobile app version, similarly to Coupun Page for mobile app version. All those design interface created without some research, the VP of Product said that this will do good without some research because we lack of time to achieve some goals in the meantime.
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            VP of Product
            <br/>
            Product Manager
            <br/>
            CMO
            <br/>
            Mobile Front End Engineer Developer
            <br/>
            Back End Engineer Developer
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            Juny - July 2019
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - Axure RP8 (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
            <br/>
            - Figma (Mac Based App)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            - Web Interfaces
            <br/>
            - Mobile Application Interfaces
          </SectionText>
        <Button onClick={() => window.location = '/ ' }>
          Back
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;