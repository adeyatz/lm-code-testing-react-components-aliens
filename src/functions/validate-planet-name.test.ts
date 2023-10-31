import validatePlanetName from "./validate-planet-name";

describe("validatePlanetName", () => {
  test(`Given a valid name, 
    When the function is called, 
    Then the return array is empty`, () => {
    const validPlanetName = "earth";

    const result = validatePlanetName(validPlanetName);

    expect(result.length).toBe(0);
  });

  test(`Given a name with length < 3, 
    When the function is called, 
    Then the return array length is 1 and the message contains '2 and 49'`, () => {
    const invalidPlanetName = "e";

    const result = validatePlanetName(invalidPlanetName);

    expect(result.length).toBe(1);
    expect(result[0].search("2 and 49")).toBeGreaterThan(0);
  });

  test(`Given a name with length > 49, 
    When the function is called, 
    Then the return array length is 1 and the message contains '2 and 49'`, () => {
    const invalidPlanetName =
      "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee";

    const result = validatePlanetName(invalidPlanetName);

    expect(result.length).toBe(1);
    expect(result[0].search("2 and 49")).toBeGreaterThan(0);
  });

  test(`Given a name with invalid characters, 
    When the function is called, 
    Then the return array length is 1 and the message contains 'special'`, () => {
    const validPlanetName = "earth&";

    const result = validatePlanetName(validPlanetName);

    expect(result.length).toBe(1);
    expect(result[0].search("special")).toBeGreaterThan(0);
  });

  test(`Given a name with invalid characters and too short, 
    When the function is called, 
    Then the return array length is 2 and the messages contain 'special' and '2 and 49'`, () => {
    const validPlanetName = "&";

    const result = validatePlanetName(validPlanetName);

    expect(result.length).toBe(2);
    expect(result[0].search("2 and 49")).toBeGreaterThan(0);
    expect(result[1].search("special")).toBeGreaterThan(0);
  });

  test(`Given a name with invalid characters and too long, 
    When the function is called, 
    Then the return array length is 2 and the messages contain 'special' and '2 and 49'`, () => {
    const validPlanetName =
      "&aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee";

    const result = validatePlanetName(validPlanetName);

    expect(result.length).toBe(2);
    expect(result[0].search("2 and 49")).toBeGreaterThan(0);
    expect(result[1].search("special")).toBeGreaterThan(0);
  });
});
