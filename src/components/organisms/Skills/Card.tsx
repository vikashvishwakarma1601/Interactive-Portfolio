import { ReactElement } from "react";
import {
  SkillCardContainer,
  IconWrapper,
  Title,
  Description,
  InfoWrapper,
} from "./style";

interface Props {
  icon: ReactElement;
  title: string;
  description?: string;
}

const SkillCard = ({ icon, title, description }: Props) => {
  return (
    <SkillCardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrapper>
    </SkillCardContainer>
  );
};

export default SkillCard;
