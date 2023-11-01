import { FirstProyectCards } from "./FirstProyectCards";
import { InnerLeftColumn } from "./InnerLeftColumn";
import { PresentationCard } from "./PresentationCard";

export function RightColumn() {
  return (
    <div className="scroll">
      <InnerLeftColumn />
      <PresentationCard />
      <FirstProyectCards />
    </div>
  );
}
