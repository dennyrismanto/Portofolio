import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import {
  SocialIconsLi,
  SocialIconsEmail,
  SocialIconsGi,
} from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rismanto.denny@gmail.com">
            rismanto.denny@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <LinkTitle>Socials</LinkTitle>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIconsGi href="https://github.com/dennyrismanto">
            <AiFillGithub size="3rem" />
          </SocialIconsGi>
          <SocialIconsLi href="https://www.linkedin.com/in/denny-rismanto-99537bb6/">
            <AiFillLinkedin size="3rem" />
          </SocialIconsLi>
          <SocialIconsEmail href="mailto:rismanto.denny@gmail.com">
            <HiOutlineMail size="3rem" />
          </SocialIconsEmail>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
