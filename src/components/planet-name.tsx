import ErrorMessage from "./error-message";

export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validate: (value: string) => string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessage = validate(planetName);

  return (
    <>
      {/* <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
      <ErrorMessage message={errorMessage} /> */}
      <label>
        Planet Name
        <input
          type="text"
          value={planetName}
          onChange={(e) => onChangePlanetName(e.target.value)}
        />
        <ErrorMessage message={errorMessage} />
      </label>
    </>
  );
};

export default PlanetName;
