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

    const someHeaderText = screen.getByText(/Number of Beings/i);
    expect(someHeaderText).toBeInTheDocument();
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
    Then the update function should be called with 'My New String'`, async () => {
    const mockUpdate = jest.fn();
    const requiredProps: NumberOfBeingsProps = {
      numberOfBeings: "",
      onChangeNumberOfBeings: mockUpdate,
    };

    render(<NumberOfBeings {...requiredProps} />);

    const input = screen.getByRole("textbox");
    const typedString = "My New String";

    const mockUser = userEvent.setup();
    await mockUser.type(input, typedString);

    expect(mockUpdate).toBeCalledTimes(typedString.length);
    expect(mockUpdate).nthCalledWith(1, "M");
    expect(mockUpdate).nthCalledWith(13, "g");
  });
});
