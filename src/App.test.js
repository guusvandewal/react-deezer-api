import { render, screen } from "@testing-library/react";
import App from "./App";

test("Find h1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Deezer playlist/i);
  expect(linkElement).toBeInTheDocument();
});
