// @ts-nocheck

import React, { useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";

const LandingTypeEffect = () => {
  const divRef = useRef();
  return (
    <TypeWriterEffect
      // textStyle={{
      //   fontFamily: "Quicksand",
      //   color: "#3F3D56",
      //   fontWeight: 500,
      //   fontSize: "1.5em",
      // }}

      // startDelay={500}
      cursorColor="#3F3D56"
      multiText={["No Distrations", "Hassle Free", "Simple", "Minimalist"]}
      multiTextDelay={1500}
      typeSpeed={400}
      multiTextLoop={true}
    />
  );
};

export default LandingTypeEffect;
