import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
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
       <DiReact style={{display:"flex"}} size="3rem"/><ListTitle>Front-End</ListTitle>
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
