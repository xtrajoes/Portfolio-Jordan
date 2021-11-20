import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiHeroku } from 'react-icons/di';

import { Container, Container2, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container2>
    <Div1>
      <Link href="/">
        <NavLink style={{display:"flex"}}>
          <DiHeroku size="3rem"/> <Span>Home</Span>
        </NavLink>
      </Link>
    </Div1>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/jordan-andrianda/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/xtrajoes/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/xtrajoes" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container2>
);

export default Header;
