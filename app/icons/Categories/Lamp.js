import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Lamp() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="60%"
      height="60%"
      stroke="white"
      fill="white"
    >
      <Path d="M343.913 166.816l-24-160A8.001 8.001 0 00312.001 0h-112a8 8 0 00-7.912 6.816l-24 160a8 8 0 007.912 9.184h72v288h-64a8 8 0 00-8 8v32a8 8 0 008 8h144a8 8 0 008-8v-32a8 8 0 00-8-8h-64V176h24v34.216c-7.653 4.418-10.275 14.204-5.856 21.856 4.418 7.653 14.204 10.275 21.856 5.856 7.653-4.418 10.275-14.204 5.856-21.856a15.998 15.998 0 00-5.856-5.856V176h32a8 8 0 007.912-9.184zM320.001 480v16h-128v-16h128zM185.289 160l21.6-144h98.224l21.6 144H185.289z" />
    </Svg>
  );
}

export default Lamp;
