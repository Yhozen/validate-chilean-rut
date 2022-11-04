import { describe, it, expect } from "vitest";
import { add } from "../src";

describe("addition", () => {
  it("should add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should add a positive and negative number", () => {
    expect(add(-2, 3)).toBe(1);
  });

  it("should add two negative numbers", () => {
    expect(add(-4, -3)).toBe(-7);
  });
});
