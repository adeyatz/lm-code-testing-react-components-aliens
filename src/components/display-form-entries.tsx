import { useRef, useEffect } from "react";

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

  console.log(`DisplayFormEntries ${inSubmit}`);

  useEffect(() => {
    if (inSubmit) {
      formData.current = formTextEntries;
      setSubmit(false);
      console.log(`setSubmit(false)`);
    }
  });

  return (
    <>
      <label htmlFor="displayFormEntries">Submitted Entry</label>
      <textarea
        id="displayFormEntries"
        cols={40}
        rows={5}
        value={formData.current}
        readOnly={true}
        //        onValueChange={setSubmit (false)}
        // onChange={() => setSubmit(false)}
        // onClick={() => setSubmit(false)}
      />
    </>
  );
};

export default DisplayFormEntries;
