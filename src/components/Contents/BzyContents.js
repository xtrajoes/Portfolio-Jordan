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
          Bizzy Indonesia <br/>
          <SectionText>
            Phoenix Product B2B Platform  (2019)
          </SectionText>
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/Bizzy Project.jpg' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> Web CMS </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Bizzy Indonesia is a dynamic and inclusive digital marketplace for businesses. Bizzy was equipped with an e-procurment platform for search, tactical and transactional procurement of every item it sells. Bizzy was engaged in B2B or rather known as Business to Business, whic selling goods to large companies such as indonesia corporations from electronic to office equipment. Bizzy was transforming into a marketplace that upholds justice with the concept of ‘clean economy’ with a transparent, efficient price.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Gathering some research topic about prototype design and create some customer content management system for bizzy project called Phoenix.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As a Product Designer Intern, first I’m learning the technology they used to create a Prototype from a Desktop application named Axure RP8 and then mostly do research about that and turn into a paper about how Prototype Design makes it feasible and viable for the software development process in a tech company, and then created some interface about Content Management System for a project called a Phoenix-based on Bizzy Design System.
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            - Group Product Manager(under VP and CEO)
            <br/>
            - Senior Product Designer
            <br/>
            - Senior Product Manager
            <br/>
            - Associate Product Designer
            <br/>
            - Associate Product Manager
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            January - April 2019
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - Axure RP8 (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            - Web Interfaces
            <br/>
            - Content Management System Interface
          </SectionText>
        <Button onClick={() => window.location = '/ ' }>
          Back
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;