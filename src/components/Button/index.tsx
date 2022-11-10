import { ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?:ReactNode;
  title?: string;
  a?: boolean;
  link?: string;
  color?: 'white' | 'purple'
}

export function Button ({ icon, title, a, link, color='white' }: ButtonProps) {
  return(
    <S.Button as={a ? "a" : ''} href={link} color={color}>
      {icon}
      {title}
    </S.Button>
  );
}