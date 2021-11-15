import React from 'react';
import { DiReact } from 'react-icons/di';
import { AiOutlineSketch } from 'react-icons/ai';
import { TiLightbulb } from 'react-icons/ti';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle main>Technologies So Far</SectionTitle>
   <SectionText>
     Lorem Ipsum Defana Loren Ipsum Defana Karada
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
            Hypertext Markup Language <br />
            Cascading Style Sheets <br />
            React JS & React Native
          </ListParagraph>
       </ListContainer>     
     </ListItem>
     <ListItem>
       <AiOutlineSketch size="3rem"/>
       <ListContainer>
        <ListTitle>Product Design</ListTitle>
          <ListParagraph>
            Experiences: <br />
            Hypertext Markup Language <br />
            Cascading Style Sheets <br />
            React JS & React Native
          </ListParagraph>
       </ListContainer>     
     </ListItem>
     <ListItem>
       <ListContainer>
       <TiLightbulb size="3rem"/><ListTitle>Product Research</ListTitle>
          <ListParagraph>
            Experiences: <br />
            Hypertext Markup Language <br />
            Cascading Style Sheets <br />
            React JS & React Native
          </ListParagraph>
       </ListContainer>     
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
