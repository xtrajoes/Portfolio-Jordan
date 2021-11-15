import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './ContentsStyles';

const Contents = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Transjakarta Application <br/>
          <h6>Public transportation from indonesia government</h6>
        </SectionTitle>
        {/* <SectionTitle2 left center>
          Product, Designer, <br />
          Frontend Enthusiast 
        </SectionTitle2> */}
        <SectionText >
        <h6>Brief Description </h6>
          Transjakarta is a public transportation from Jakarta government of Indonesia Country. This app let knows you that jakarta
          have another hidden gem spot for they who wants to see, like history of Jakarta Show, Jakarta Modern, Jakarta Open Space, 
          Jakarta Shopping, Jakarta Heritage and many more that you can explore with this apps.
        </SectionText>
        <SectionText >
          Transjakarta is a public transportation from Jakarta government of Indonesia Country. This app let knows you that jakarta
          have another hidden gem spot for they who wants to see, like history of Jakarta Show, Jakarta Modern, Jakarta Open Space, 
          Jakarta Shopping, Jakarta Heritage and many more that you can explore with this apps.
        </SectionText>
        <SectionText >
          Transjakarta is a public transportation from Jakarta government of Indonesia Country. This app let knows you that jakarta
          have another hidden gem spot for they who wants to see, like history of Jakarta Show, Jakarta Modern, Jakarta Open Space, 
          Jakarta Shopping, Jakarta Heritage and many more that you can explore with this apps.
        </SectionText>
        <Button onClick={() => window.location = '#about' }>
          Learn more about me
        </Button>
      </LeftSection>
  </Section>
);

export default Contents;