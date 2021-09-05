import React from "react";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { AiFillTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stacks</SectionTitle>
    <SectionText>Range of technologies I have worked with</SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Nextjs, React.js ,<br />
            HTML, CSS, Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* Back-end */}
      <ListItem>
        <SiFirebase size="3rem" />

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js , Express.js,
            <br />
            Python,Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* Other Technologies */}
      <ListItem>
        <AiFillTool size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Firebase,Google Cloud,
            <br /> Git,Figma,
            <br />
            C/C++,Haskell
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
