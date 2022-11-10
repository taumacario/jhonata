import { ReactNode } from "react";
import { CardStyle } from "./styles";

interface CardProps {
  active?: boolean
  children: ReactNode
}

export function Card ({active = false, children} : CardProps) {
  return (
    <CardStyle active={active}>
      {children}
    </CardStyle>
  )
}