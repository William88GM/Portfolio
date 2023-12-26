import "./App.css";
import { LeftColumn } from "./Components/LeftColumn";
import { RightColumn } from "./Components/RightColumn";
function App() {
  // const SVGimports = {
  //   Left: "./public/PortfolioSVG/Left.svg",
  // };

  return (
    <>
      <main className="main-mobile">
        <div className="mobile-container">
          <img
            src="https://i.postimg.cc/HkqqsVKJ/Left.webp"
            alt="Social Networks"
            className="profile-card"
          />
          <div className="card-presentation-mobile">
            <div>
              <h1>Guillermo Martínez</h1>
              <h3>Full Stack Web Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                impedit adipisci dolorem magni nulla nihil error aliquid,
                ducimus nisi quis rerum.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                impedit adipisci dolorem magni nulla nihil error aliquid,
                ducimus nisi quis rerum.
              </p>
            </div>
            {/* <img
              src="https://i.postimg.cc/qR6fQVRN/cat.gif"
              className="cat-gif"
              alt="cat-gif"
            /> */}
          </div>
          {/* poner en modo escritorio tamb pero con la card horizontal*/}
          <div className="div-absolute">
            <img src="fondo" alt="" />
            <img
              src="https://i.postimg.cc/7L8h0xRd/vertical.webp"
              className="Proyect-Vertical-Card-mobile-1"
              alt=""
            />
          </div>{" "}
          <div className="div-absolute">
            <img src="fondo" alt="" />
            <img
              src="https://i.postimg.cc/7L8h0xRd/vertical.webp"
              className="Proyect-Vertical-Card-mobile-1"
              alt=""
            />
          </div>
        </div>
      </main>
      <main>
        <LeftColumn />
        <RightColumn />
      </main>
    </>
  );
}

export default App;
