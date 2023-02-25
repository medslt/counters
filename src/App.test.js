import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should show 3 initial 0s", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText("0");
  expect(linkElement.length).toEqual(3);
});
