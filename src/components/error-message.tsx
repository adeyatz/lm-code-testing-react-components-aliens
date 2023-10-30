interface ErrorMessageProps {
  message: string[];
}
export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className="errorMsg">
      {props.message.length > 0 && props.message.join("<br />")}
    </div>
  );
}
