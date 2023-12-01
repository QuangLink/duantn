import { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "red",
};

function Loader() {
  let [color, setColor] = useState("#6bdaf3");

  return (
    <div
      className="sweet-loading"
      style={{
        paddingTop: "20%",
        paddingBottom: "20%",
      }}
    >
      <PacmanLoader
        color={color}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
