import { render, screen } from "@testing-library/react";
import SignIn from "./components/auth/SignIn";

test("renders SignIn page", () => {
  render(<SignIn />);
  const linkElement = screen.getByText("Sign In");
  expect(linkElement).toBeInTheDocument();
});
