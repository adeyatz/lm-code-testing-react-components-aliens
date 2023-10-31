import ErrorMessage from "./error-message";

export interface WhatIs2Plus2Props {
  answer: string;
  onChangeSelection: (value: string) => void;
  validate: (answer: string) => string[];
}

export const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({
  answer,
  onChangeSelection,
  validate,
}) => {
  const errorMessage = validate(answer);

  return (
    <>
      <label>
        What is 2+2
        <select
          value={answer}
          onChange={(e) => onChangeSelection(e.target.value)}
        >
          <option value="4">4</option>
          <option value="Not 4">Not 4</option>
        </select>
        <ErrorMessage message={errorMessage} />
      </label>
    </>
  );
};
