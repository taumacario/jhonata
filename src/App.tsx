import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { Depositions } from "./components/Depositions";
import { DetailsBox } from "./components/DetailsBox";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Infinity } from "./components/Infinity";
import { Learn } from "./components/Learn";
import { Moduls } from "./components/Moduls";
import { Presentation } from "./components/Presentation";
import { TecsCard } from "./components/TecsCard";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [growHeader, setGrowHeader] = useState(false)
  
  useEffect(() => {
    function positionScroll(){
      if(window.scrollY > 30){
        setGrowHeader(true)
      } else {
        setGrowHeader(false)
      }
    }
    window.addEventListener('scroll', positionScroll)
  }, [])

  return (
    <>
      <GlobalStyle/>
      <Header growHeader={growHeader}/>
      <Hero />
      <Presentation />
      <DetailsBox />
      <Learn />
      <Moduls/>
      <Infinity />
      <TecsCard />
      <Depositions />
      <Contact />
    </>
  );
}
