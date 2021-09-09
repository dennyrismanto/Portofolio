import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm <br />
        Saket Nandanwar
      </SectionTitle>
      <SectionText>
        I'm a <b> Budding Full Stack Developer and a student</b> based in{" "}
        <b>Mumbai, India</b>.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/whodissaket")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
