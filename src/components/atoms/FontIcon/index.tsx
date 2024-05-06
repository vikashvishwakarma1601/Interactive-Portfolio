import { IconContainer } from "./style";

interface FontIconProps {
  icon: () => void;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const FontIcon = ({ icon, width, height, className = "" }: FontIconProps) => {
  const invert = !false;

  return (
    <IconContainer
      className={className}
      $width={width}
      $height={height}
      $invert={invert}
    >
      {icon()}
    </IconContainer>
  );
};

export default FontIcon;
