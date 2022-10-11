import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import MovieSurf from "./pages/MovieSurf";
import WeatherNow from "./pages/WeatherNow";
import MiniGame from "./pages/MiniGame";
import Skills from "./pages/Skills";
import PersonalPage from "./pages/PersonalPage";
import { useEffect, useState } from "react";
import Thankyou from "./pages/Thankyou";

//시발 다 모르겠고 배운거 다 합치자^^ 시발 <시발></시발>

function App() {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <div>
      <MainPage />
      <div style={{ opacity: (position - 600) / 500 }}> 
          <MovieSurf />
      </div>
      <WeatherNow />
      <MiniGame />
      <Skills />
      <PersonalPage />
      <Thankyou />
    </div>
  );
}

export default App;
