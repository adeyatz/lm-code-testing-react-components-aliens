import ErrorMessage from "./error-message";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
  validate: (value: string) => string[];
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validate,
}) => {
  const errorMessage = validate(speciesName);

  return (
    <>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default SpeciesName;
