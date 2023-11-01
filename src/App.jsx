import "./App.css";
import { LeftColumn } from "./Components/LeftColumn";
import { RightColumn } from "./Components/RightColumn";
function App() {
  // const SVGimports = {
  //   Left: "./public/PortfolioSVG/Left.svg",
  // };

  return (
    <main>
      <LeftColumn />
      <RightColumn />
    </main>
  );
}

export default App;
