import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="mailto:jordanandrianda@gmail.com" target="_blank" rel="noopener noreferrer">Ask from email</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:jordanandrianda@gmail.com" target="_blank" rel="noopener noreferrer">jordanandrianda@gmail.com</LinkItem>
        </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan><i>Anything that can go wrong will go wrong. <br/> - Murphy's Law</i></Slogan>
       </CompanyContainer>
       <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/jordan-andrianda/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/xtrajoes/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/xtrajoes" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
        </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
