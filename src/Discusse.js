import { Link } from "react-router-dom";
import RoomCardbox from "./Roomcardbox";
import useMycoursedata from "./usefetchmycoursehook";
import useRoom from "./useRoom";

function Discusse() {
  const { isLoading, data, isError, error, isFetching, refech } = useRoom();
  if (data)
    return (
      <div className="Discussebox">
        <h1>Join Room</h1>
        {data.map((course) => (
          <RoomCardbox name={course} />
        ))}
      </div>
    );
}

export default Discusse;
