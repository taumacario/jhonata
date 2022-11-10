import { Top } from "./styles";

import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp'


export function BackToTop() {
  return (
    <Top href="#">
      Voltar ao topo
      <ArrowUp size={20} />
    </Top>
  );
}