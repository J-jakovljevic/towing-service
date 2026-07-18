import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the towing service landing page", () => {
  render(<App />);

  expect(screen.getByText(/24\/7 Roadside Assistance/i)).toBeTruthy();
});
