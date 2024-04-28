import React, { ReactSVGElement } from "react";
import SkillCard from "./Card";
import Icon from "../../atoms/Icon";

import { SkillsContainer, Wrapper, Row } from "./style";

import { SkillsData } from "./data";

interface Skills {
  src: ReactSVGElement;
  title: string;
  description: string;
}

const Skills = () => {
  console.log(SkillsData);

  const renderSkills = (skillList: Skills[]) => {
    return React.Children.toArray(
      skillList.map((item) => {
        return (
          <SkillCard
            icon={<Icon src={item.src} size="md" />}
            title={item.title}
            description={item.description}
          />
        );
      })
    );
  };

  return (
    <SkillsContainer>
      <h3>Expertise</h3>
      <Wrapper>
        <Row>{renderSkills(SkillsData[0])}</Row>
        <Row>{renderSkills(SkillsData[1])}</Row>
        <Row>{renderSkills(SkillsData[2])}</Row>
      </Wrapper>
    </SkillsContainer>
  );
};

export default Skills;
