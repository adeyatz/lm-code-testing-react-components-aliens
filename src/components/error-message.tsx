interface ErrorMessageProps {
  message: string[];
}
export default function ErrorMessage(props: ErrorMessageProps) {
  //  console.log("Error Msg:", props.message);
  return (
    <div className="errorMsg">
      {props.message && props.message.join("<br />")}
    </div>
  );
}
