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
      multiText={["Zero Distractions", "Hassle-free"]}
      multiTextDelay={100}
      typeSpeed={200}
      multiTextLoop={true}
    />
  );
};

export default LandingTypeEffect;
