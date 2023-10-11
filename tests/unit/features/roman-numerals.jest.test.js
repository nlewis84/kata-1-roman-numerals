import { expect, test } from "@jest/globals";
import romanNumeralFunctions from "../../../src/features/roman-numerals";
const { convertRomanToNumber, convertNumberToRoman } = romanNumeralFunctions;

test("basic roman numeral to number", () => {
  // Basic numbers
  expect(convertRomanToNumber("I")).toBe(1);
  expect(convertRomanToNumber("V")).toBe(5);
  expect(convertRomanToNumber("X")).toBe(10);
  expect(convertRomanToNumber("L")).toBe(50);
  expect(convertRomanToNumber("C")).toBe(100);
  expect(convertRomanToNumber("D")).toBe(500);
  expect(convertRomanToNumber("M")).toBe(1000);
});

test("subtractive roman numeral to number", () => {
  // Subtractive numbers
  expect(convertRomanToNumber("IV")).toBe(4);
  expect(convertRomanToNumber("IX")).toBe(9);
  expect(convertRomanToNumber("XL")).toBe(40);
  expect(convertRomanToNumber("XC")).toBe(90);
  expect(convertRomanToNumber("CD")).toBe(400);
  expect(convertRomanToNumber("CM")).toBe(900);
});

test("long roman numeral to number", () => {
  // Long numbers
  expect(convertRomanToNumber("III")).toBe(3);
  expect(convertRomanToNumber("VIII")).toBe(8);
});

test("big roman numeral to number", () => {
  // Big numbers
  expect(convertRomanToNumber("MMMDCCCLXXXVIII")).toBe(3888);
  expect(convertRomanToNumber("MMCDLVII")).toBe(2457);
});

test("number to roman numeral", () => {
  // Basic numbers
  expect(convertNumberToRoman(1)).toBe("I");
  expect(convertNumberToRoman(5)).toBe("V");
  expect(convertNumberToRoman(10)).toBe("X");
  expect(convertNumberToRoman(50)).toBe("L");
  expect(convertNumberToRoman(100)).toBe("C");
  expect(convertNumberToRoman(500)).toBe("D");
  expect(convertNumberToRoman(1000)).toBe("M");
});

test("subtractive number to roman numeral", () => {
  // Subtractive numbers
  expect(convertNumberToRoman(4)).toBe("IV");
  expect(convertNumberToRoman(9)).toBe("IX");
  expect(convertNumberToRoman(40)).toBe("XL");
  expect(convertNumberToRoman(90)).toBe("XC");
  expect(convertNumberToRoman(400)).toBe("CD");
  expect(convertNumberToRoman(900)).toBe("CM");
});

test("long number to roman numeral", () => {
  // Long numbers
  expect(convertNumberToRoman(3)).toBe("III");
  expect(convertNumberToRoman(8)).toBe("VIII");
});

test("big number to roman numeral", () => {
  // Big numbers
  expect(convertNumberToRoman(3888)).toBe("MMMDCCCLXXXVIII");
  expect(convertNumberToRoman(2457)).toBe("MMCDLVII");
});

test("double-digit number to roman numeral", () => {
  // Double-Digit numbers
  expect(convertNumberToRoman(11)).toBe("XI");
  expect(convertNumberToRoman(22)).toBe("XXII");
  expect(convertNumberToRoman(33)).toBe("XXXIII");
});

test("invalid input for roman numeral to number", () => {
  // Invalid characters
  expect(() => convertRomanToNumber("A")).toThrow();
  expect(() => convertRomanToNumber("Z")).toThrow();

  // Invalid combinations
  expect(() => convertRomanToNumber("IIII")).toThrow();
  expect(() => convertRomanToNumber("VV")).toThrow();

  // Lowercase numerals
  expect(convertRomanToNumber("iv")).toBe(4);
});

test("invalid input for number to roman numeral", () => {
  // Negative numbers and zero
  expect(() => convertNumberToRoman(-1)).toThrow();
  expect(() => convertNumberToRoman(0)).toThrow();

  // Numbers larger than the standard limit
  expect(() => convertNumberToRoman(4000)).toThrow();
});
