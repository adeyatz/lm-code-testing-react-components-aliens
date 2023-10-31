import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReasonForSparing, { ReasonForSparingProps } from "./reason-for-sparing";

describe(`<ReasonForSparing />`, () => {
  test(`Given the required props, 
        When the component is rendered, 
        Then the text 'Reason for sparinge' should be present`, () => {
    const requiredProps: ReasonForSparingProps = {
      reason: "",
      onChangeReason: () => {},
      validate: () => {
        return [];
      },
    };

    render(<ReasonForSparing {...requiredProps} />);

    const someText = screen.getByText("Reason for sparing");
    expect(someText).toBeInTheDocument();
  });

  test(`Given the text value 'because humans are a superior race' for reason
        When the component  is rendered
        Then the textArea should have the value 'because humans are a superior race'`, () => {
    const testReason = "because humans are a superior race";
    const requiredProps: ReasonForSparingProps = {
      reason: testReason,
      onChangeReason: () => {},
      validate: () => {
        return [];
      },
    };

    render(<ReasonForSparing {...requiredProps} />);

    const textArea: HTMLElement = screen.getByRole("textbox");
    expect(textArea).not.toBeNull();
    expect(textArea).toHaveAttribute("id", "reasonForSparing");

    console.log("TextContent", textArea.textContent);

    // textArea
    //   .getAttributeNames()
    //   .forEach((attr) => console.log("attribute:", attr));
    // console.log("Has value attribute: ", textArea.hasAttribute("value"));
    // console.log("value", textArea.getAttribute("value"));
    // expect(textArea).toHaveAttribute("value", testReason); // THIS TEST FAILS, THERE IS NO ATTRIBUTE VALUE
    expect(textArea.textContent).toEqual(testReason);
  });

  test(`Given the user types 'martians are great' 
    When the component  is rendered
    Then onChangeSpeciesName should be called with 
    each character in turn from the string 'martians are great'`, async () => {
    const testReason = "martians are great";
    const mockOnReasonChange = jest.fn();

    const requiredProps: ReasonForSparingProps = {
      reason: "",
      onChangeReason: mockOnReasonChange,
      validate: () => {
        return [];
      },
    };

    render(<ReasonForSparing {...requiredProps} />);

    const input = screen.getByRole("textbox");
    expect(input).not.toBeNull();

    const mockUser = userEvent.setup();
    await mockUser.type(input, testReason);

    expect(mockOnReasonChange).toBeCalledTimes(testReason.length);
    for (let i = 0; i < testReason.length; i++) {
      expect(mockOnReasonChange).nthCalledWith(i + 1, testReason.charAt(i));
    }
  });
});
