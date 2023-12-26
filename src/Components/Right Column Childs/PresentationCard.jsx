import "../../styles/PresentationCard.css";
export function PresentationCard() {
  return (
    <>
      <img
        src="https://i.postimg.cc/SsB2gLtS/Group-7-1.webp"
        className="Cable"
        alt=""
      />

      <div className="card-presentation">
        <div>
          <h1>Guillermo Martínez</h1>
          <h3>Full Stack Web Developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            impedit adipisci dolorem magni nulla nihil error aliquid, ducimus
            nisi quis rerum.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            impedit adipisci dolorem magni nulla nihil error aliquid, ducimus
            nisi quis rerum.
          </p>
        </div>

        <img
          src="https://i.postimg.cc/qR6fQVRN/cat.gif"
          className="cat-gif"
          style={{ width: "30%", height: "30%" }}
          alt="cat-gif"
        />
      </div>
    </>
  );
}
