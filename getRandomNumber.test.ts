import { describe, expect, mock, test } from "bun:test";
import { getRandomNumber } from "./getRandomNumber";

describe("Given the getRandomFunction is called", () => {
  test("Then the length of the number should match 36", () => {
    const value = getRandomNumber();
    expect(value).toHaveLength(36);
  });

  test("Then the value should equal the mocked value", () => {
    mock.module("uuid", () => ({ v4: "mocked-uuid" }));
    const value = getRandomNumber();
    expect(value).toEqual("mocked-uuid");
  });
});
