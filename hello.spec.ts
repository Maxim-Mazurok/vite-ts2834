import { it, expect } from "vitest";
import { hello } from "./hello";

it("works", () => {
  expect(hello()).toBe("hello");
});
