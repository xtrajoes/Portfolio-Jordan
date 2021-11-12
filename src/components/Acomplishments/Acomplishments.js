import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: '-'},
  { number: 1000, text: '-', },
  { number: 1900, text: '-', },
  { number: 5000, text: '-', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle> Personal</SectionTitle>
   <Boxes>
     {data.map((card, index) =>(
       <Box key={index}>
         <BoxNum>
           {card.number}+
         </BoxNum>
         <BoxText>
           {card.text}
         </BoxText>
       </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
