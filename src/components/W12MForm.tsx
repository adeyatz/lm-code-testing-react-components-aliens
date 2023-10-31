import { useState } from "react";
import W12MHeader from "./W12MHeader";

import SpeciesName from "./species-name";
import validateSpeciesName from "../functions/validate-species-name";

import PlanetName from "./planet-name";
import validatePlanetName from "../functions/validate-planet-name";

import NumberOfBeings from "./number-of-beings";
import validateNumberOfBeings from "../functions/validate-number-of-beings";

import { WhatIs2Plus2 } from "./what-is-2-plus-2";
import validateWhatIs2Plus2 from "../functions/validate-what-is-2-plus-2";

import ReasonForSparing from "./reason-for-sparing";
import validateReason from "../functions/validate-reason";

import DisplayFormEntries from "./display-form-entries";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("earth");
  const [numberOfBeings, setNumberOfBeings] = useState("4");
  const [whatIs2Plus2, setWhatIs2Plus2] = useState("4");
  const [reason, setReason] = useState("Reason goes here 😆");
  const [inSubmit, setInSubmit] = useState(false);

  function logValues() {
    console.log(`speciesName: ${speciesName}`);
    console.log(`planetName ${planetName}`);
    console.log(`numberOfBeings: ${numberOfBeings}`);
    console.log(`whatIs2Plus2: ${whatIs2Plus2}`);
    console.log(`reason: ${reason}`);
    setInSubmit(true);
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={setSpeciesName}
        validate={validateSpeciesName}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={setPlanetName}
        validate={validatePlanetName}
      />

      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={setNumberOfBeings}
        validate={validateNumberOfBeings}
      />

      <WhatIs2Plus2
        answer={whatIs2Plus2}
        onChangeSelection={setWhatIs2Plus2}
        validate={validateWhatIs2Plus2}
      />
      <ReasonForSparing
        reason={reason}
        onChangeReason={setReason}
        validate={validateReason}
      />
      <button onClick={logValues}>Submit</button>
      <DisplayFormEntries
        inSubmit={inSubmit}
        setSubmit={setInSubmit}
        formTextEntries={[
          speciesName,
          planetName,
          numberOfBeings,
          whatIs2Plus2,
          reason,
        ].join(`\n`)}
      />
    </section>
  );
};

export default W12MForm;
