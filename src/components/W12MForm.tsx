import { useState } from "react";
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

  function validateSpeciesName(speciesName: string): string[] {
    const errorList: string[] = [];

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

  function validatePlanetName(planetName: string): string[] {
    const errorList: string[] = [];

    if (planetName.length < 2 || planetName.length > 49) {
      errorList.push("Planet Name must be between 2 and 49 characters");
    }

    if (planetName.match(/[^a-zA-Z0-9]/)) {
      errorList.push("Planet Name cannot contain special characters");
    }
    return errorList;
  }

  function validateNumberOfBeings(numberOfBeings: string): string[] {
    const errorList: string[] = [];

    if (numberOfBeings.match(/[^0-9]/)) {
      errorList.push("Number of Beings can only contain numbers 0-9");
    }

    if (parseInt(numberOfBeings) < 1000000000) {
      errorList.push("Number of Beings must be at least 1000000000");
    }
    return errorList;
  }

  function validateWhatIs2Plus2(selection: string): string[] {
    const errorList: string[] = [];

    if (selection !== "4") {
      errorList.push("4 is the only valid option");
    }

    return errorList;
  }

  function validateReason(reason: string): string[] {
    const errorList: string[] = [];

    if (reason.length < 17 || reason.length > 153) {
      errorList.push("Reason must be between 17 and 153 characters");
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
