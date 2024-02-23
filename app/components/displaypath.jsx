import React from "react";
import StationCard from "./stationcard";
import Arrow from "./arrow";
const DisplayPath = ({ line, bg }) => {
  return (
    <div>
      {line.map((station, index) => {
        if (index < line.length - 1) {
          return (
            <div key={index} className="text-center">
              <StationCard background={bg} station={station}></StationCard>
              <Arrow></Arrow>
            </div>
          );
        } else {
          return (
            <div key={index} className="text-center">
              <StationCard background={bg} station={station}></StationCard>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DisplayPath;
