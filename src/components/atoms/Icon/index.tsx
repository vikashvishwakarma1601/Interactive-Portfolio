import { ReactSVGElement } from "react";

import { IconWrapper, Image } from "./style";
import { Size } from "../../../global";

interface Props {
  src?: ReactSVGElement | string;
  onClick?: (...args: any) => void;
  size?: Size;
}

const Icon = ({ src, size = "sm" }: Props) => {
  return (
    <IconWrapper $size={size}>
      <Image src={src} />
    </IconWrapper>
  );
};

export default Icon;
