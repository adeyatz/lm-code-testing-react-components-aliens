import ErrorMessage from "./error-message";

export interface ReasonForSparingProps {
  reason: string;
  onChangeReason: (value: string) => void;
  validate: (reason: string) => string[];
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reason,
  onChangeReason,
  validate,
}) => {
  const errorMessage = validate(reason);

  return (
    <>
      <label>
        Reason for sparing
        <textarea
          id="reasonForSparing"
          value={reason}
          onChange={(event) => onChangeReason(event.target.value)}
        />
        <ErrorMessage message={errorMessage} />
      </label>
    </>
  );
};
export default ReasonForSparing;
