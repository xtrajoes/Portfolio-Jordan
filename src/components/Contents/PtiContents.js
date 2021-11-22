import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider, SecondaryBtn , SectionSubText } from '../../styles/GlobalComponents';
import { BlogCard, BlogCardContent, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LeftSection } from './ContentsStyles';
import { projects } from '../../constants/constants';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';

const Contents = (props) => (
  <Section row>
      <LeftSection>
        <SectionTitle main center>
          Proper-Ti <br/>
          <h6>Sales & Customer Mobile Platform (2020)</h6>
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/Slice.png' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> <h6> Mobile Application Interfaces </h6> </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Proper-ti is a special property agent from PT BUANA MEDIA NUSANTARA focus on buying and selling housing that provides a system from the start of the development process from mature land to ready for habitation. Proper-Ti provides the facility to be able to view the status of the offer, booking fees, up to receipt of booking fees. They also have a pages for customers if they want to make a complaint.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Developing a User Interface Design prototype with a User Centered Design method approach that is applied to a interface for mobile applications, Then Evaluating the results of the application of User Centered Design with Usability Testing, with the hope of achieving a fairly high Usability Testing value when applied to mobile applications.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As a Product Reseaercher // Product Designer, I was involved in all phases of the project, from mapping out the core research problem to delivering the final prototype designs.
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            October 2020 - January 2021
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - MarvelApp (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
            <br/>
            - Maze.Design (Windows and Mac)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            - Mobile Application Interfaces
          </SectionText>
        <SectionSubText>Design Process for Proper-Ti </SectionSubText>
          <SectionText >
          <a href={"https://drive.google.com/file/d/1yApcXAzJtKWIBxxaHdjkWXedvvVYBmOF/view?usp=sharing"} target="_blank" rel="noopener noreferrer" download>
            <SecondaryBtn>
              Click Here
            </SecondaryBtn>
          </a>
          </SectionText>
        <List>
          <Button onClick={() => window.location = '/ ' }>
            Back
          </Button>
          {/* <a href={"https://drive.google.com/file/d/1N7JWSTIF-XpgMjyNMPj30GvtG9mVq3zO/view?usp=sharing"} target="_blank" rel="noopener noreferrer" download>
            <Button>
              Download
            </Button>
          </a> */}
        </List>
      </LeftSection>
  </Section>
);

export default Contents;