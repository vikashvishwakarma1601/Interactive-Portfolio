import { ReactNode } from "react";
import { BasicButton } from "./style";
import type { Size } from "../../../global";

interface Props {
  children: ReactNode;
  renderIcon?: false | ((...args: any) => void);
  alignIcon?: "left" | "right" | false;
  variant?: "main" | "secondary";
  size?: Size;
}

const Button = ({
  children,
  renderIcon = false,
  alignIcon = false,
  variant = "main",
  size = "sm",
}: Props) => {
  return (
    <BasicButton $variant={variant} $size={size}>
      {alignIcon === "left" && renderIcon && renderIcon()}
      {children}
      {alignIcon === "right" && renderIcon && renderIcon()}
    </BasicButton>
  );
};

export default Button;
