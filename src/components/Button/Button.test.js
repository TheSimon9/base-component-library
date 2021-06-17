import Button from "./Button";
import {render} from '@testing-library/react'
import React from "react";

describe("Button component", function(){
  it("should render", function(){
    const {queryByTestId} = render(<Button /> );
    const renderedButton = queryByTestId("button-component");
    expect(renderedButton).toBeTruthy();
  });

  it("should run the given action once clicked", function(){
    const fakeOnClickAction = jest.fn();
    const {queryByTestId} = render(<Button action={fakeOnClickAction} /> );

    const renderedButton = queryByTestId("button-component");
    renderedButton.click();

    expect(renderedButton).toBeTruthy();
    expect(fakeOnClickAction).toHaveBeenCalled();
  });

  it("should render with the given custom text", function(){
    const {queryByText} = render(<Button text={"customText"} /> );
    expect(queryByText("customText")).toBeTruthy();
  });
})