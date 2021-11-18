import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { def: '2 years', text: 'UI/UX & PM Callus Studio'},
  { def: '4 months', text: 'UI/UX Vesperia'},
  { def: '4 months', text: 'Product Designer Bizzy', },
  { def: '2 months', text: 'UI/UX Akseleran', },
  { def: '4 months', text: 'Product Researcher Gojek', },
  { def: '4 months', text: 'UI/UX Proper-Ti', },
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Work Experience</SectionTitle>
   <Boxes>
     {data.map((card, index) =>(
       <Box key={index}>
         <BoxNum>
           {card.def}
         </BoxNum>
         <BoxText>
          
           {card.text}
         </BoxText>
       </Box>
     ))}
   </Boxes>
   {/* <SectionDivider/> */}
 </Section>
);

export default Acomplishments;
