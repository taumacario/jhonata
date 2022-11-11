import { useEffect, useState } from "react"
import { api } from "../../services/api"

import {Link} from 'react-scroll'

import { Container } from "../Container"
import { Wrapper, Menu, Content } from "./styles"
import logoImg from '../../assets/logo.svg'

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
                  <Link
                    activeClass="active"
                    to={item.url}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={400}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </Menu>
        </Content>
      </Container>
    </Wrapper>
  )
}