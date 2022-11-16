import { useEffect, useState } from "react"
import { api } from "../../services/api"

import {Link} from 'react-scroll'

import { Container } from "../Container"
import { Wrapper, Menu, Content, MenuHamburguer } from "./styles"
import logoImg from '../../assets/logo.svg'

interface Menu {
  id: number;
  name: string;
  url: string;
}

export function Header() {
  const [menu, setMenu] = useState<Menu[]>([])
  const [open, setOpen] = useState(false)
  const [growHeader, setGrowHeader] = useState(false)

  useEffect(() => {
    api.get('menudata')
      .then(response => setMenu(response.data))
  }, [])

  useEffect(() => {
    function positionScroll(){
      if(window.scrollY > 25){
        setGrowHeader(true)
      } else {
        setGrowHeader(false)
      }
    }
    window.addEventListener('scroll', positionScroll)
  }, [])

  return (
    <Wrapper className={growHeader ? 'bg' : ''}>
      <Container>
        <Content className={growHeader ? 'bg' : ''}>
          <img src={logoImg} alt="Logo do site"/>

          <Menu className={open ? 'open' : ''}>
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

          <MenuHamburguer onClick={() => setOpen(!open)} className={open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </MenuHamburguer>
        </Content>
      </Container>
    </Wrapper>
  )
}