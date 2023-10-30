import { useState, useRef } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species-name";
import PlanetName from "./planet-name";
import NumberOfBeings from "./number-of-beings";
import { WhatIs2Plus2 } from "./what-is-2-plus-2";
import ReasonForSparing from "./reason-for-sparing";
import DisplayFormEntries from "./display-form-entries";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("earth");
  const [numberOfBeings, setNumberOfBeings] = useState("4");
  const [whatIs2Plus2, setWhatIs2Plus2] = useState("4");
  const [reason, setReason] = useState("Reason goes here");
  const [inSubmit, setInSubmit] = useState(false);

  function logValues() {
    console.log(`speciesName: ${speciesName}`);
    console.log(`planetName ${planetName}`);
    console.log(`numberOfBeings: ${numberOfBeings}`);
    console.log(`whatIs2Plus2: ${whatIs2Plus2}`);
    console.log(`reason: ${reason}`);
    setInSubmit(true);
  }

  function validateSpeciesName(speciesName: string): string[] {
    const errorList = [];

    if (speciesName.length < 3 || speciesName.length > 23) {
      errorList.push("Species Name must be between 3 and 23 characters");
    }
    if (speciesName.match(/[^a-zA-Z]/)) {
      errorList.push(
        "Species Name cannot contain special characters or numbers"
      );
    }
    return errorList;
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={setSpeciesName}
        validate={validateSpeciesName}
      />
      <PlanetName planetName={planetName} onChangePlanetName={setPlanetName} />

      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={setNumberOfBeings}
      />

      <WhatIs2Plus2 answer={whatIs2Plus2} onChangeSelection={setWhatIs2Plus2} />
      <ReasonForSparing reason={reason} onChangeReason={setReason} />
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
