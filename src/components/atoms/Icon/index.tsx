import { ReactSVGElement } from "react";

import { IconWrapper, Image } from "./style";
import { Size } from "../../../global";

interface Props {
  src: () => void;
  onClick?: (...args: any) => void;
  size?: Size;
  className?: string;
}

const Icon = ({ src, size = "sm", className = "" }: Props) => {
  return (
    <IconWrapper className={className} $size={size}>
      {src()}
    </IconWrapper>
  );
};

export default Icon;
