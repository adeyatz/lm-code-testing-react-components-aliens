import { useRef } from "react";

interface DisplayFormEntriesProps {
  formTextEntries: string;
  inSubmit: boolean;
  setSubmit: (value: boolean) => void;
}

const DisplayFormEntries: React.FC<DisplayFormEntriesProps> = ({
  formTextEntries,
  inSubmit,
  setSubmit,
}) => {
  const formData = useRef(`Enter Submit button to see the data`);
  if (inSubmit) {
    formData.current = formTextEntries;
    setSubmit(false);
  }

  return (
    <>
      <label htmlFor="displayFormEntries">Form Entry</label>
      <textarea
        id="displayFormEntries"
        cols={40}
        rows={5}
        value={formData.current}
      />
    </>
  );
};

export default DisplayFormEntries;
