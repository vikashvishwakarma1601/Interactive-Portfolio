import { IconContainer } from "./style";

interface FontIconProps {
  icon: () => void;
  width?: string | number;
  height?: string | number;
}

const FontIcon = ({ icon, width, height }: FontIconProps) => {
  const invert = !false;

  return (
    <IconContainer $width={width} $height={height} $invert={invert}>
      {icon()}
    </IconContainer>
  );
};

export default FontIcon;
