export function PresentationCard() {
  return (
    <div className="RightColumn">
      <img
        src="./public/PortfolioSVG/CircuitRightPresentation.svg"
        className="CircuitPresentation"
        alt=""
      />
      <div className="card-presentation">
        <div>
          <h1>Guillermo Martínez</h1>
          <h3>Full Stack Web Developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            impedit adipisci dolorem magni nulla nihil error aliquid, libero
            officia pariatur, ducimus nisi quis rerum. Possimus, dicta quaerat.
            Accusamus, vel ipsa!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            impedit adipisci dolorem magni nulla nihil error aliquid, libero
            officia pariatur, ducimus nisi quis rerum. Possimus, dicta quaerat.
            Accusamus, vel ipsa!
          </p>
        </div>
        <img
          src="./public/cat.gif"
          className="cat-gif"
          style={{ width: "30%", height: "30%" }}
          alt="cat-gif"
        />
      </div>
    </div>
  );
}
