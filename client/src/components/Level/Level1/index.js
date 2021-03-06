import React from "react";
import "./style.css";
import imageMap from "./map.json";
import Location from "../Location";
import GameNav from "../../layout/GameNav";

const style = {
  container: {
    position: "relative",
    height: "auto",
  },
  backgroundImage: {
    width: "100%",
    maxHeight: "80vh",
  },
  header: {
    backgroundColor: "white",
    color: "black",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
  },
};

function Level1(props) {
  const [location, setLocation] = React.useState({
    name: "Earth",
    id: 0,
  });

  let getLandingSpot = (name, id) => {
    setLocation({ ...location, name: name, id: id });
  };

  return (
    <React.Fragment>
      <Location displayed={props.displayed} location={location} />
      <div style={style.container}>
        <img
          src="./img/levelimgs/lvl0.png"
          style={style.backgroundImage}
          alt="Level 1"
        />
        {imageMap.map((item) => (
          <div
            style={item.style}
            onClick={(e) => {
              getLandingSpot(item.name, item.id);
            }}
          ></div>
        ))}
      </div>
      <GameNav />
    </React.Fragment>
  );
}

export default Level1;
