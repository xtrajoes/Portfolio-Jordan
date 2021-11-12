import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, <br />
          Name's Joe 
        </SectionTitle>
        <SectionTitle2 left center>
          Product, Designer, <br />
          Frontend Enthusiast 
        </SectionTitle2>
        <SectionText >
          An ordinary person who loves build a product from scratch and design it then breaks it with the code
        </SectionText>
        <Button onClick={() => window.location = '#about' }>
          Learn more about me
        </Button>
      </LeftSection>
  </Section>
);

export default Hero;