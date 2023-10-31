export default function validateWhatIs2Plus2(selection: string): string[] {
  const errorList: string[] = [];

  if (selection !== "4") {
    errorList.push("4 is the only valid option");
  }

  return errorList;
}
