import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIconsGi,
  SocialIconsLi,
  SocialIconsEmail,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portofolio</Span>
        </a>
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
      <SocialIconsGi href="https://github.com/dennyrismanto">
        <AiFillGithub size="3rem" />
      </SocialIconsGi>
      <SocialIconsLi href="https://www.linkedin.com/in/denny-rismanto-99537bb6/">
        <AiFillLinkedin size="3rem" />
      </SocialIconsLi>
      <SocialIconsEmail href="mailto:rismanto.denny@gmail.com">
        <HiOutlineMail size="3rem" />
      </SocialIconsEmail>
    </Div3>
  </Container>
);

export default Header;
