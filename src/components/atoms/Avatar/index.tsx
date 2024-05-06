import { ReactSVGElement } from "react";
import { AvatarContainer, AvatarImage } from "./style";

interface Props {
  src?: ReactSVGElement | string;
  hideBG?: boolean;
  borderRadius?: number | string;
}

const Avatar = ({ src, hideBG = false, borderRadius = 50 }: Props) => {
  return (
    <AvatarContainer $hideBG={hideBG} $borderRadius={borderRadius}>
      <div>
        <AvatarImage src={src} />
      </div>
    </AvatarContainer>
  );
};

export default Avatar;
