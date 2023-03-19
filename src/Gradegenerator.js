import { useContext } from "react";
import AmharicModeContext from "./Amharicversion";

function Gradegenerator({ id, grade }) {
  const individual = grade?.filter((c) => c.courseoutlines == id);
  console.log(id, individual);
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);

  return (
    <div>
      {individual.length !== 0 && (
        <p>
          {individual.map((grades) => (
            <>{grades.percent}</>
          ))}
        </p>
      )}

      {individual.length == 0 && (
        <p style={{ color: "gray" }}>
          {" "}
          {isAmharicMode ? " አልተፈተኑትም" : "Not Evaluated"}
        </p>
      )}
    </div>
  );
}

export default Gradegenerator;
