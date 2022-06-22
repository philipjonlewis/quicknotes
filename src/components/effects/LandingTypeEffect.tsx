// @ts-nocheck

import React, { useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";

const LandingTypeEffect = () => {
  const divRef = useRef();
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Quicksand",
        color: "#3F3D56",
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      startDelay={0}
      cursorColor="#3F3D56"
      multiText={["nonesense", "distraction", "something else"]}
      multiTextDelay={1000}
      typeSpeed={200}
      multiTextLoop={true}
    />
  );
};

export default LandingTypeEffect;
