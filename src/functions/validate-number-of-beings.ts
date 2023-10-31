export default function validateNumberOfBeings(
  numberOfBeings: string
): string[] {
  const errorList: string[] = [];

  if (numberOfBeings.match(/[^0-9]/)) {
    errorList.push("Number of Beings can only contain numbers 0-9");
  }

  if (parseInt(numberOfBeings) < 1000000000) {
    errorList.push("Number of Beings must be at least 1000000000");
  }
  return errorList;
}
