export default function validatePlanetName(planetName: string): string[] {
  const errorList: string[] = [];

  if (planetName.length < 2 || planetName.length > 49) {
    errorList.push("Planet Name must be between 2 and 49 characters");
  }

  if (planetName.match(/[^a-zA-Z0-9]/)) {
    errorList.push("Planet Name cannot contain special characters");
  }
  return errorList;
}
