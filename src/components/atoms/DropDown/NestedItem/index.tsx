import { ReactNode } from "react";

import { Container, NestedContainer, NestedItems, NestedLabel } from "../style";
import ArrowForward from "../../../../assets/icons/arrow-forward-ios.svg?react";
import FontIcon from "../../FontIcon";

interface Props {
  label: string;
  children?: ReactNode;
}

const NestedItem = ({ children, label }: Props) => {
  return (
    <NestedItems>
      <NestedLabel>
        <span>{label}</span>
        <FontIcon icon={ArrowForward} />
      </NestedLabel>
      <NestedContainer className="nested__item__container">
        <Container>{children}</Container>
      </NestedContainer>
    </NestedItems>
  );
};

export default NestedItem;
