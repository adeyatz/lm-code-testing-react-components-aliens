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

  /*
   * Need to call setState as a side effect, (or in an event handler) to prevent a race condition, or so it would seem
   * I'm sure there must be a better way to do this - it can't be an unusual a scenario for a Web app to need to do this
   * I can't find a suitable event that gets fired when the value of the textArea is changed other than by a User typing
   */
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
        // onValueChange={setSubmit (false)}
        // onChange={() => setSubmit(false)}
        // onClick={() => setSubmit(false)}
      />
    </>
  );
};

export default DisplayFormEntries;
