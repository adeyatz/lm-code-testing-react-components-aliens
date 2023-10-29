export interface WhatIs2Plus2Props {
  answer: string;
  onChangeSelection: (value: string) => void;
}

export const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({
  answer,
  onChangeSelection,
}) => (
  <>
    <label htmlFor="whatIs2+2">What is 2+2</label>
    <select
      id="whatIs2+2"
      value={answer}
      onChange={(e) => onChangeSelection(e.target.value)}
    >
      <option value="4">4</option>
      <option value="Not 4">Not 4</option>
    </select>
  </>
);
