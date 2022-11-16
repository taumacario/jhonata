import { Contact } from "./components/Contact";
import { Depositions } from "./components/Depositions";
import { DetailsBox } from "./components/DetailsBox";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Infinity } from "./components/Infinity";
import { Learn } from "./components/Learn";
import { Presentation } from "./components/Presentation";

import { GlobalStyle } from "./styles/global";

export function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Hero />
      <Presentation />
      <DetailsBox />
      <Learn />
      <Infinity />
      <Depositions />
      <Contact />
    </>
  );
}
