import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './ContentsStyles';

const Contents = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bank Central Asia <br/>
          <h6>Content Management System for test blast E-mail </h6>
        </SectionTitle>
        {/* <SectionTitle2 left center>
          Product, Designer, <br />
          Frontend Enthusiast 
        </SectionTitle2> */}
        <SectionText >
        <h6>Brief Description </h6>
          Bank Central Asia is an Indonesian bank founded on 21 February 1957. It is considered as the largest privately-owned bank in Indonesia. We got project to design the content management systems for Bank Central Asia or BCA, the purpose of this CMS to test blast email for workers, so BCA would know how much of their worker can get fraud email. Blast email contains any fake website, promotion or anything that may workers interest to fill that and get fraud.
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