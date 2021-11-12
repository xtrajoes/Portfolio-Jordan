import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: '-'},
  { number: 11, text: '-', },
  { number: 111, text: '-', },
  { number: 1111, text: '-', }
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
