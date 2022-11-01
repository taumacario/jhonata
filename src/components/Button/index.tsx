import { ReactNode } from "react";
import { ButtonDefault } from "./styles";

interface ButtonProps {
  icon?:ReactNode;
  title?: string;
}

export function Button({icon, title}: ButtonProps) {
  return(
    <ButtonDefault>
      <a href="https://pt-br.facebook.com/">
        {icon}
        {title}
      </a>
    </ButtonDefault>
  );
}