import { Wrapper, Menu, Content } from "./styles"
import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "../Container";

interface Menu {
  id: number;
  name: string;
  url: string;
}
interface HeaderProps {
  growHeader: boolean
}

export function Header({ growHeader} : HeaderProps) {
  const [menu, setMenu] = useState<Menu[]>([])
  

  useEffect(() => {
    api.get('menudata')
      .then(response => setMenu(response.data))
  }, [])

  

  return (
    <Wrapper className={growHeader ? 'bg' : ''}>
      <Container>
        <Content className={growHeader ? 'bg' : ''}>
          <img src={logoImg} alt="Logo do site"/>

          <Menu>
            {menu.map(item => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.name}</a>
                </li>
              )
            })}
          </Menu>
        </Content>
      </Container>
    </Wrapper>
  )
}