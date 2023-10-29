import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

describe(`<W12Form />`, () => {
  test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element
    expect(container.firstChild).toHaveClass("w12MForm");
  });

  test(`Given the form is competed
  			When  when the Submit button is pressed
			Then the onButtonClicked function is called`, async () => {
    render(<W12MForm />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(1);
    const submitButton = buttons[0];

    const mockUser = userEvent.setup();
    await mockUser.click(submitButton);

    // How to test whether a component is called from the FC?
  });
});
