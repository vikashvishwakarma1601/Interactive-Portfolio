import { ReactSVGElement } from "react";
import { AvatarContainer, AvatarImage } from "./style";

interface Props {
  src?: ReactSVGElement | string;
}

const Avatar = ({ src }: Props) => {
  return (
    <AvatarContainer>
      <div>
        <AvatarImage src={src} />
      </div>
    </AvatarContainer>
  );
};

export default Avatar;
