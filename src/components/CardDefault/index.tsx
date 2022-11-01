import { ReactNode } from "react";
import { CardStyle } from "./styles";

interface CardProps {
  icon?:ReactNode;
  text?: string;
}

export function CardDefault ({icon, text}: CardProps) {
  return(
    <CardStyle>
      {icon}
      {text}
    </CardStyle>
  );
}