import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider,  SectionSubText } from '../../styles/GlobalComponents';
import { BlogCard, BlogCardContent, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LeftSection } from './ContentsStyles';
import { projects } from '../../constants/constants';

const Contents = (props) => (
  <Section row nopadding>
   
      <LeftSection>
        <SectionTitle main center>
          Bank Central Asia <br/>
          <h6>Content Management System for Blasting E-mail  (2018)</h6>
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/BCA.png' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> <h6> Web CMS </h6> </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            Bank Central Asia is an Indonesian bank founded on 21 February 1957. It is considered as the largest privately-owned bank in Indonesia. We got project to design the content management systems for Bank Central Asia or BCA, the purpose of this CMS to test blast email for workers, so BCA would know how much of their worker can get fraud email. Blast email contains any fake website, promotion or anything that may workers interest to fill that and get fraud.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Design new Content Management System fraud mail for their team or workers. To achieve their needs by the team will/would click the fraud content in their E-mail.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
            As the User Interface Designer intern, I was involved in creating the content management system from the beginning. I worked with a Product Manager to do design research first. There was no full research for this project because we got all the requirements on hands.
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            Senior Product Manager - Vesperia
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            May - July 2018 
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - Balsamiq (Windows and Mac)
            <br/>
            - Sketch (Mac Based App)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            Web Application Content Management System Interfaces
          </SectionText>
        <Button onClick={() => window.location = '/ ' }>
          Back
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;