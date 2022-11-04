import { describe, it, expect } from "vitest";
import { clearRut } from "../src";

describe("clearRut", () => {
  it("receive a number rut", () => {
    expect(clearRut(965917608)).toBe("965917608");
  });

  it("receive a rut with dash", () => {
    expect(clearRut("96591760-8")).toBe("965917608");
  });

  it("receive with dots and dash", () => {
    expect(clearRut("96.591.760-8")).toBe("965917608");
  });
});
