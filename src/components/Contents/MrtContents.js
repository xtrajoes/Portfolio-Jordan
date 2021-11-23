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
          Mass Rapid Transit Jakarta (Phase 1) <br/>
          <SectionText>
            MRT App Interface and CMS (2018)
          </SectionText> 
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/MRT.png' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> Web CMS & App </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Jakarta MRT is a rapid transit system in Jakarta, the capital city of Indonesia. The system is operated by PT Mass Rapid Transit Jakarta, a municipally owned perseroan terbatas of the city of Jakarta. Phase 1 of the project was officially opened on 24 March 2019
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Build a new Design for three projects of the MRT Jakarta Application, the first project build a fresh new interface for android application mobile, the second project build an interface for the MRT merchandise section, the third project build a CMS(Content Management System)
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As the User Interface Designer intern, I was involved in creating the first project batch with the MRT team via skype. The content of the first project was creating a new interface for android mobile such as Home Menu, Profile Menu, Go To MRT Menu, MRT Trip Menu, Directory Menu, and Settings Menu. There was no research for this project because the research was being handled by the MRT Jakarta team. The content of the second project was creating an interface for shopping such as MRT Merch, the interface design inspired by an e-commerce who had their name back in 2018. The third project was the longest time to build, it took 1 month itself to create a Content Management System for MRT Jakarta, This CMS content was Dashboard, Users, Campaign, Directory, Schedule & Route, E-Commerce content, and Statistics.
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            -Senior Product Manager Vesperia
            <br/>
            -FrontEnd Engginer Intern Vesperia
            <br/>
            -MRT Jakarta Team 
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            August - September 2018 
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - Adobe XD (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            Web Application Content Management System Interfaces
            <br/>
            Android Application Interfaces
          </SectionText>
        <Button onClick={() => window.location = '/ ' }>
          Back
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;