import React from 'react';
import { DiReact } from 'react-icons/di';
import { AiOutlineSketch } from 'react-icons/ai';
import { TiLightbulb } from 'react-icons/ti';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle main>Technologies</SectionTitle>
   <SectionText>
     Technologies for Product and Frontend So Far
   </SectionText>
   <List>
     <ListItem>
       {/* <DiReact size="3rem"/> */}
       <ListContainer>
       <ListTitle style={{display:"flex"}}>
         <DiReact size="3rem"/> Front-End
        </ListTitle>
          <ListParagraph>
            Experiences: <br />
            HTML & CSS <br />
            JavaScript & Next JS <br />
            React JS & React Native
          </ListParagraph>
       </ListContainer>     
     </ListItem>
     <ListItem>
       <ListContainer>
        <ListTitle style={{display:"flex"}}>
          <AiOutlineSketch size="3rem"/>Product Design
        </ListTitle>
          <ListParagraph>
            Experiences: <br />
            Sketch & MarvelApp<br />
            Figma & Balsamiq <br />
            Adobe XD & Axure RP8
          </ListParagraph>
       </ListContainer>     
     </ListItem>
     <ListItem>
       <ListContainer>
        <ListTitle style={{display:"flex"}}>
          <TiLightbulb size="3rem"/>Product Research
        </ListTitle>
          <ListParagraph>
            Experiences: <br />
            Maze.Design <br />
          </ListParagraph>
       </ListContainer>     
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
