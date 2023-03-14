import { RotatingLines } from "react-loader-spinner";
function Loadingcomponent() {
  return (
    <div className="Loading">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loadingcomponent;
