import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumberOfBeings, { NumberOfBeingsProps } from "./number-of-beings";

describe(`<NumberOfBeings />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'Number of Beings' should be present`, () => {
    const requiredProps: NumberOfBeingsProps = {
      numberOfBeings: "1000000",
      onChangeNumberOfBeings: () => {}, // jest.fn(),
    };

    render(<NumberOfBeings {...requiredProps} />);

    const someText = screen.getByText(/Number of Beings/i);
    expect(someText).toBeInTheDocument();
  });

  test(`Given the text value '1 for numberOfBeings
        When the component  is rendered
        Then the textbox should have the value '1'`, () => {
    const mockUpdate = jest.fn();
    const numberOfBeings = "1";

    render(
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={mockUpdate}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("value", numberOfBeings);
  });

  test(`Given the text value '123456789' for numberOfBeings
  When the component  is rendered
  Then the textbox should have the value '123456789'`, () => {
    const mockUpdate = jest.fn();
    const numberOfBeings = "123456789";

    render(
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={mockUpdate}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("value", numberOfBeings);
  });

  test(`Given the user types 'My New String' 
    When the component  is rendered
    Then onChangeNumberOfBeings should be called with 
    each character in turn from 'My New String'`, async () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    const requiredProps: NumberOfBeingsProps = {
      numberOfBeings: "",
      onChangeNumberOfBeings: mockOnChangeNumberOfBeings,
    };

    render(<NumberOfBeings {...requiredProps} />);

    const input = screen.getByRole("textbox");
    const typedString = "My New String";

    const mockUser = userEvent.setup();
    await mockUser.type(input, typedString);

    expect(mockOnChangeNumberOfBeings).toBeCalledTimes(typedString.length);
    for (let i = 0; i < typedString.length; i++) {
      expect(mockOnChangeNumberOfBeings).nthCalledWith(
        i + 1,
        typedString.charAt(i)
      );
    }
    // expect(mockUpdate).nthCalledWith(1, "M");
    // expect(mockUpdate).nthCalledWith(13, "g");
  });
});
