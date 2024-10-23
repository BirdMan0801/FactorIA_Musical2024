import { useEffect } from "react";
import styled from "styled-components";
// import Tone from "./lib/tone";
import * as Tone from "tone";
import StartAudioContext from "startaudiocontext";
import Project from "../components/Project.jsx";
import Menu_s from "../componentes/Menu_simple.jsx";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: dark-gray;
`;

function Reprod() {
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        // iOS Web Audio API requires this library.
        StartAudioContext(Tone.context);
      },
      {
        once: true,
      }
    );
  }, []);

  return (
    <AppContainer>
      <Menu_s/>
      <Project />
    </AppContainer>
  );
}

export default Reprod;
