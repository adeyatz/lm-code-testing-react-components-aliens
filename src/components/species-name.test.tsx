import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SpeciesName, { SpeciesNameProps } from "./species-name";

describe(`<SpeciesName />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'Species Name' should be present`, () => {
    const requiredProps: SpeciesNameProps = {
      speciesName: "earth",
      onChangeSpeciesName: () => {},
      validate: () => {
        return [];
      }, // jest.fn(),
    };

    render(<SpeciesName {...requiredProps} />);

    const someText = screen.getByText("Species Name");
    expect(someText).toBeInTheDocument();
  });

  test(`Given the text value 'human' for speciesName
        When the component  is rendered
        Then the textbox should have the value 'speciesName'`, () => {
    const testSpeciesName = "human";
    const requiredProps: SpeciesNameProps = {
      speciesName: testSpeciesName,
      onChangeSpeciesName: () => {}, // jest.fn(),
      validate: () => {
        return [];
      }, // jest.fn(),
    };

    render(<SpeciesName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();
    expect(input).toHaveAttribute("value", testSpeciesName);
  });

  test(`Given the user types 'martian' 
    When the component  is rendered
    Then onChangeSpeciesName should be called with 
    each character in turn from the string 'martian'`, async () => {
    const testSpeciesName = "jupiter";
    const mockOnSpeciesNameChange = jest.fn();

    const requiredProps: SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnSpeciesNameChange,
      validate: () => {
        return [];
      }, // jest.fn(),
    };

    render(<SpeciesName {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, testSpeciesName);

    expect(mockOnSpeciesNameChange).toBeCalledTimes(testSpeciesName.length);
    for (let i = 0; i < testSpeciesName.length; i++) {
      expect(mockOnSpeciesNameChange).nthCalledWith(
        i + 1,
        testSpeciesName.charAt(i)
      );
    }
  });
});
