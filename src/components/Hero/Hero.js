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
        Denny Rismanto
      </SectionTitle>
      <SectionText>
        I'm a <b> Full Stack Developer and a student</b> based in{" "}
        <b>UIN Syarif Hidayatullah, Jakarta</b>.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/dennyrismanto")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
