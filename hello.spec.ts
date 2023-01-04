import { it, expect } from "vitest";
import { hello } from "./hello.js";

it("works", () => {
  expect(hello()).toBe("hello");
});
