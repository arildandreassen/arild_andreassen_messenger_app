import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../components/ChatMessage";

describe("<ChatMessage />", () => {
  it("should have the correct text and styling", () => {
    const text = "sample message in test";
    render(<Message text={text} isOwner="self" />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId("chatmessage")).toHaveStyle(
      "white-space: break-spaces;"
    );
  });
});
