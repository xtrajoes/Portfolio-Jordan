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
          Gojek Research <br/>
          <h6>Driver Researcher & Project Snoopy (2019)</h6>
        </SectionTitle>
        <BlogCardContent>
          <Img src='images/Product-research.png' />
        </BlogCardContent>
        <br/><br/>
        <SectionDivider/>
        <SectionTitle main> <h6> Mobile Application Interfaces </h6> </SectionTitle>
        <SectionSubText>Brief Description </SectionSubText>
          <SectionText  >
            PT Aplikasi Karya Anak Bangsa, doing business as Gojek, is an Indonesian on-demand multi-service platform and digital payment technology group based in Jakarta. Gojek was first established in Indonesia in 2010 as a call center to connect consumers to courier delivery and two-wheeled ride-hailing services.
          </SectionText>
        <SectionSubText>Objective </SectionSubText>
          <SectionText >
            Join hands some fellow Driver Research gojek team to help achieve the best result to their need & goals.
          </SectionText>
        <SectionSubText>Responsibility </SectionSubText>
          <SectionText >
          As a Producr Researcher Platform Driver Function Contract-Based, I was doing :
          Conduct IDI(InDepth Interview) GoPay behaviour user as a driver and as user 2 wheel drivers in the first week onhand (Bangalore team) in Kemang Timur Gojek Office
          <br/> <br/>
        
          Desk research Competitive Intelligence: Newsletter Driver
          <br/><br/>
          
          Project Snoopy(Driver App)
          <br/>
          - Desk research competitor app
          <br/>
          - Novelty Feature App 1.0
          <br/>
          - App Comparison Study
          <br/>
          - Collaborate with Gojek CN, VN, TH for Feature Library Apps
          <br/><br/>
        
          Conduct and Observe IDI(InDepth Interview) & FGD(Focus Group Discussion) 2 wheel and 4 wheel Driver Studying Driver Behaviours in Kemang Timur Gojek Office with Driver Product Designer
          <br/>
          - Synthesis Report for every Studying Driver Behaviour
          <br/><br/>
          Observe IDI(InDepth Interview) 2w Driver for Driver User Journey in Kemang Timur Gojek Office
          </SectionText>
        <SectionSubText>Collaboration Team </SectionSubText>
          <SectionText >
            - Head of Product Research (Driver & Marketplace) & Survey Science Lead, Research & Insights
            <br/>
            - Product Research
            <br/>
            - Senior Researcher
            <br/>
            - Product Designer
          </SectionText>
        <SectionSubText>Timeline </SectionSubText>
          <SectionText >
            July - November 2019
          </SectionText>
        <SectionSubText>Tools </SectionSubText>
          <SectionText >
            - MSExcel (Windows and Mac)
            <br/>
            - Slack  (Windows and Mac)
            <br/>
            - Maze.Design (Windows and Mac)
          </SectionText>
        <SectionSubText>Type </SectionSubText>
          <SectionText >
            - Mobile Application Interfaces
          </SectionText>
          <Button onClick={() => window.location = '/ ' }>
            Back
          </Button>
      </LeftSection>
  </Section>
);

export default Contents;