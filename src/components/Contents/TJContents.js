import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider,  SectionSubText } from '../../styles/GlobalComponents';
import { BlogCard, BlogCardContent, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LeftSection } from './ContentsStyles';
import { projects } from '../../constants/constants';

const Contents = (props) => (
  <Section row >
      <LeftSection>
        <SectionTitle main center>
          Transjakarta Application <br/>
          <SectionText>
            Public transportation from indonesia government (2018)
          </SectionText>        
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/TJ.jpg' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> Android App Interface </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Transjakarta is a public transportation from Jakarta government of Indonesia Country. This app let knows you that jakarta
            have another hidden gem spot for they who wants to see, like history of Jakarta Show, Jakarta Modern, Jakarta Open Space, 
            Jakarta Shopping, Jakarta Heritage and many more that you can explore with this apps.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Redesigning an android app helps people accommodate to achieve their needs by using the app and searching every spot in Jakarta.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As the User Interface Designer intern, I was involved in redesigning phases only from the Transjakarta and Android app old menu and old feature 
            into high fidelity design. I worked with a Product Manager. There was no research for this project because we’re on short time, so I redesign it based on the app which has existed before.
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            Senior Product Manager - Vesperia
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            July - August 2018 (1 Week Project)
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - Balsamiq (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            Android Application Interfaces
          </SectionText>
        <Button onClick={() => window.location = '/ ' }>
          Back
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;