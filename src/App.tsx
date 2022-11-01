import { DetailsBox } from "./components/DetailsBox";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PlayerVideo } from "./components/Player";
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
    </>
  );
}
