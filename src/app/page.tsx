import Fim from "./Components/LandPage/Fim/Fim";
import Footer from "./Components/LandPage/Footer/Footer";
import Header from "./Components/LandPage/Header/Header";
import Inicio from "./Components/LandPage/Inicio/Inicio";
import Intro from "./Components/LandPage/Intro/Intro";
import Slide from "./Components/LandPage/Slide/Slide";
import Team from "./Components/LandPage/Team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Intro />
      <Slide />
      <Team />
      <Fim />
      <Footer />
    </>
  );
}
