export default function validateReason(reason: string): string[] {
  const errorList: string[] = [];

  if (reason.length < 17 || reason.length > 153) {
    errorList.push("Reason must be between 17 and 153 characters");
  }

  return errorList;
}
