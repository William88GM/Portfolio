import "./App.css";
import { PresentationCard } from "./Components/PresentationCard";
import { FirstProyectCards } from "./Components/FirstProyectCards";
function App() {
  // const SVGimports = {
  //   Left: "./public/PortfolioSVG/Left.svg",
  // };

  return (
    <main>
      <div className="LeftColumn">
        <img
          src="https://i.postimg.cc/wBKD3Dmn/Left.png"
          alt="Social Networks"
          className="Left"
        />
      </div>
      <div className="scroll">
        <PresentationCard />
        <FirstProyectCards />
      </div>
    </main>
  );
}

export default App;
