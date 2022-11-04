import { describe, it, expect } from "vitest";
import {
  clearRut,
  getCheckDigit,
  getCheckDigitFromSum,
  getRutSum,
  splitRut,
  validateRut,
} from "../src";

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

describe("splitRut", () => {
  it("separate checkDigit and get inverseRut array", () => {
    const { checkDigit, inverseRut } = splitRut("965917608");

    expect(checkDigit).toBe("8");
    expect(inverseRut.join("")).toBe("06719569");
  });
});

describe("getRutSum", () => {
  it("get an inverseRut digit array and return the desired value", () => {
    expect(getRutSum("97587621".split(""))).toBe(190);
  });
});

describe("getCheckDigitFromSum", () => {
  it("get checkDigit as string using sum as input", () => {
    expect(getCheckDigitFromSum(190)).toBe("8");
  });

  it("get checkDigit k", () => {
    expect(getCheckDigitFromSum(232)).toBe("k");
  });
});

describe("getCheckDigit", () => {
  it("get checkDigit from a number", () => {
    expect(getCheckDigit(76997492)).toBe("k");
  });

  it("get checkDigit from a string", () => {
    expect(getCheckDigit("76997492")).toBe("k");
  });
});

describe("validateRut", () => {
  it("get validateRut from a number", () => {
    expect(validateRut("76997492-k")).toBe(true);
  });
  /*
  it("get validateRut from a string", () => {
    expect(validateRut("18.844.757-0")).toBe(true);
  });
  */
});
