import { ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?:ReactNode;
  title?: string;
  a?: boolean;
  link?: string;
}

export function Button ({ icon, title, a, link }: ButtonProps) {
  return(
    <S.Button as={a ? "a" : ''} href={link}>
      {icon}
      {title}
    </S.Button>
  );
}