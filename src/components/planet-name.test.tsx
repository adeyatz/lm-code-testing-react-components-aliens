import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PlanetName, { PlanetNameProps } from "./planet-name";

describe(`<PlanetName />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'Planet Name' should be present`, () => {
    const requiredProps: PlanetNameProps = {
      planetName: "earth",
      onChangePlanetName: () => {},
      validate: () => {
        return [];
      },
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
      onChangePlanetName: () => {},
      validate: () => {
        return [];
      },
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
      validate: () => {
        return [];
      },
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

  test(`Given valid input 
        When the component  is rendered
        Then no error message is displayed`, async () => {
    const validPlanetName = "jupiter";
    const mockValidate = jest.fn();

    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: mockValidate,
    };

    const noErrorMessages: string[] = [];
    mockValidate.mockReturnValue(noErrorMessages);

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, validPlanetName);

    const divElement = screen.getAllByRole("generic").pop();

    expect(divElement).toBeEmptyDOMElement();
  });

  test(`Given invalid length input 
        When the component  is rendered
        An error message is displayed containing '2 and 49'`, async () => {
    const invalidPlanetName = "e";
    const mockValidate = jest.fn();

    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: mockValidate,
    };

    const errorMessages = ["Planet Name must be between 2 and 49 characters"];
    mockValidate.mockReturnValue(errorMessages);

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, invalidPlanetName);

    const errMsg = screen.getByText(/2 and 49/i);
    expect(errMsg).toBeInTheDocument();
  });

  test(`Given invalid input symbol 
        When the component  is rendered
        An error message is displayed containing 'cannot contain special'`, async () => {
    const invalidPlanetName = "earth£";
    const mockValidate = jest.fn();

    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: mockValidate,
    };

    const errorMessages = ["Planet Name cannot contain special characters"];
    mockValidate.mockReturnValue(errorMessages);

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, invalidPlanetName);

    const errMsg = screen.getByText(/cannot contain special/i);
    expect(errMsg).toBeInTheDocument();
  });

  test(`Given invalid input symbol and too many characters 
        When the component  is rendered
        Two error message are displayed containing 'cannot contain special', '2 and 49'`, async () => {
    const invalidPlanetName =
      "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee£";
    const mockValidate = jest.fn();

    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: mockValidate,
    };

    const errorMessages = [
      "Planet Name must be between 2 and 49 characters",
      "Planet Name cannot contain special characters",
    ];
    mockValidate.mockReturnValue(errorMessages);

    render(<PlanetName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, invalidPlanetName);

    const errMsg1 = screen.getByText(/cannot contain special/i);
    expect(errMsg1).toBeInTheDocument();
    const errMsg2 = screen.getByText(/2 and 49/i);
    expect(errMsg2).toBeInTheDocument();
  });
});
