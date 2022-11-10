import { Depositions } from "./components/Depositions";
import { DetailsBox } from "./components/DetailsBox";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Infinity } from "./components/Infinity";
import { Learn } from "./components/Learn";
import { Moduls } from "./components/Moduls";
import { Presentation } from "./components/Presentation";
import { Profile } from "./components/Profile";
import { TecsCard } from "./components/TecsCard";
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
      <Moduls/>
      <Infinity />
      <TecsCard />
      <Depositions />
    </>
  );
}
