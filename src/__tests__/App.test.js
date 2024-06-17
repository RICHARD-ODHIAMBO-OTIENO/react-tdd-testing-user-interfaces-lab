import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Richard Otieno`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: "Hi, I'm Richard Otieno",
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of Richard Otieno with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/richard otieno/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', './src/image.jpg');
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", { name: "About Me", level: 2 });
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const biographyParagraph = screen.getByText(/I am a civil Engineer with 8 years experience in design, supervision and contract administration on national trunk roads. I am also a tech enthusiast enrolled for a software Engineering course at Moringa School./i);
  expect(biographyParagraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: "GitHub" });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/RICHARD-ODHIAMBO-OTIENO');
});

test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/richard-otieno-7b210b7b');
});
