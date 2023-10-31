import ErrorMessage from "./error-message";

export interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings: (value: string) => void;
  validate: (value: string) => string[];
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
  validate,
}) => {
  const errorMessage = validate(numberOfBeings);

  return (
    <>
      <label>
        Number of Beings
        <input
          type="text"
          value={numberOfBeings}
          onChange={(e) => onChangeNumberOfBeings(e.target.value)}
        />
        <ErrorMessage message={errorMessage} />
      </label>
    </>
  );
};

export default NumberOfBeings;
