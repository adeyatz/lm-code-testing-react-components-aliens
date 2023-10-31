import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { WhatIs2Plus2, WhatIs2Plus2Props } from "./what-is-2-plus-2";

describe(`<WhatIs2Plus2 />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'What is 2+2' should be present`, () => {
    const requiredProps: WhatIs2Plus2Props = {
      answer: "4",
      onChangeSelection: () => {},
      validate: () => {
        return [];
      },
    };

    render(<WhatIs2Plus2 {...requiredProps} />);

    const someHeaderText = screen.getByText("What is 2+2");
    expect(someHeaderText).toBeInTheDocument();
  });

  test(`Given the user selects option 'Not 4'
    When the component  is rendered
    Then onChangeSelection should be called with 
    the string 'Not 4'`, async () => {
    const mockOnChangeSelection = jest.fn();
    const requiredProps: WhatIs2Plus2Props = {
      answer: "4",
      onChangeSelection: mockOnChangeSelection,
      validate: () => {
        return [];
      },
    };

    render(<WhatIs2Plus2 {...requiredProps} />);

    const selectedOption = "Not 4";
    const selectCombo = screen.getByRole("combobox");
    const mockUser = userEvent.setup();
    await mockUser.selectOptions(selectCombo, selectedOption);

    expect(mockOnChangeSelection).toBeCalledTimes(1);
    expect(mockOnChangeSelection).toBeCalledWith(selectedOption);
  });
});
