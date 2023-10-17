import "./App.css";
import { PresentationCard } from "./Components/PresentationCard";
import { FirstProyectCards } from "./Components/FirstProyectCards";
function App() {
  const SVGimports = {
    Left: "./public/PortfolioSVG/Left.svg",
  };

  return (
    <main>
      <div className="LeftColumn">
        <img src={SVGimports.Left} alt="Social Networks" />
      </div>
      <div className="scroll">
        <PresentationCard />
        <FirstProyectCards />
      </div>
    </main>
  );
}

export default App;
