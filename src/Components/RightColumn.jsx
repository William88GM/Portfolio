import { ProyectCard } from "./Right Column Childs/ProyectCard";
import { PresentationCard } from "./Right Column Childs/PresentationCard";

export function RightColumn() {
  return (
    <div className="scroll-column">
      <PresentationCard />
      <ProyectCard />
    </div>
  );
}
