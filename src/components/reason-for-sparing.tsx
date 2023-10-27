interface ReasonForSparingProps {
  reason: string;
  onChangeReason: (value: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reason,
  onChangeReason,
}) => (
  <>
    <label htmlFor="reasonForSparing">Reason for sparing</label>
    <textarea
      id="reasonForSparing"
      value={reason}
      onChange={(event) => onChangeReason(event.target.value)}
    />
  </>
);

export default ReasonForSparing;
