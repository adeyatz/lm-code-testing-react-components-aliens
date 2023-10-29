import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PlanetName, { PlanetNameProps } from "./planet-name";

describe(`<PlanetName />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'Planet Name' should be present`, () => {
    const requiredProps: PlanetNameProps = {
      planetName: "earth",
      onChangePlanetName: () => {}, // jest.fn(),
    };

    render(<PlanetName {...requiredProps} />);

    const someText = screen.getByText("Planet Name");
    expect(someText).toBeInTheDocument();
  });

  test(`Given the text value 'mars' for planetName
        When the component  is rendered
        Then the textbox should have the value 'mars'`, () => {
    const testPlanetName = "mars";
    const requiredProps: PlanetNameProps = {
      planetName: testPlanetName,
      onChangePlanetName: () => {}, // jest.fn(),
    };

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();
    expect(input).toHaveAttribute("value", testPlanetName);
  });

  test(`Given the user types jupiter' 
    When the component  is rendered
    Then onChangePlaneName should be called with 
    each character in turn from the string 'jupiter'`, async () => {
    const testPlanetName = "jupiter";
    const mockOnPlanetNameChange = jest.fn();

    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: mockOnPlanetNameChange,
    };

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, testPlanetName);

    expect(mockOnPlanetNameChange).toBeCalledTimes(testPlanetName.length);
    for (let i = 0; i < testPlanetName.length; i++) {
      expect(mockOnPlanetNameChange).nthCalledWith(
        i + 1,
        testPlanetName.charAt(i)
      );
    }
  });
});
