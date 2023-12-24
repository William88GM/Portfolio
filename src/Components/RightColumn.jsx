import { ProyectCard } from "./Right Column Childs/ProyectCard";
import { Cables } from "./Right Column Childs/Cables";
import { PresentationCard } from "./Right Column Childs/PresentationCard";

export function RightColumn() {
  return (
    <div className="scroll">
      <Cables />
      <PresentationCard />
      <ProyectCard />
      <ProyectCard />
    </div>
  );
}
