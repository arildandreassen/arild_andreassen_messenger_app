import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chat from "../components/Chat";

jest.mock("../connection", () => {
  return {
    ws: jest.fn(() => {
      id: "123";
    }),
  };
});

describe("<Chat />", () => {
  it("should render the correct number of ChatMessages", () => {
    const messageCount = 5;
    const msgs = [];
    const text = "this is a test";
    for (let i = 0; i < messageCount; i++) {
      msgs.push({ owner: "self", text });
    }

    render(<Chat messages={msgs} />);
    expect(screen.getAllByText(text)).toHaveLength(messageCount);
  });
});
