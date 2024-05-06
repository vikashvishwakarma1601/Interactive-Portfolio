import { useEffect, useRef, useState } from "react";
import WindowControls from "../../atoms/WindowControls";
import { Container, Layer } from "./style";

interface WindowContainerProps {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly children: React.ReactNode;
}

const WindowContainer = ({
  width = 280,
  height = 500,
  children,
}: WindowContainerProps) => {
  const [isFocused, setIsFocused] = useState("inActive");
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleFocus = (event: any) => {
      if (containerRef.current && containerRef.current.contains(event.target)) {
        setIsFocused("active");
      } else {
        setIsFocused("inActive");
      }
    };

    window.addEventListener("click", handleFocus);
    return () => {
      window.removeEventListener("click", handleFocus);
    };
  }, []);

  return (
    <Container
      $width={width}
      $height={height}
      ref={containerRef}
      $isFocused={isFocused}
    >
      <div> </div>
      <Layer>
        <WindowControls />
        {children}
      </Layer>
    </Container>
  );
};

export default WindowContainer;
