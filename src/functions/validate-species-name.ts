export default function validateSpeciesName(speciesName: string): string[] {
  const errorList: string[] = [];

  if (speciesName.length < 3 || speciesName.length > 23) {
    errorList.push("Species Name must be between 3 and 23 characters");
  }
  if (speciesName.match(/[^a-zA-Z]/)) {
    errorList.push("Species Name cannot contain special characters or numbers");
  }
  return errorList;
}
