import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiHeroku } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <NavLink style={{display:"flex"}}>
          <DiHeroku size="3rem"/> <Span>Home</Span>
        </NavLink>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
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
  </Container>
);

export default Header;
