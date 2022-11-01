import { ReactNode } from "react";
import { ContainerStyle } from "./styled";

interface ContainerProps {
  children: ReactNode
}
export function Container({children}: ContainerProps) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}