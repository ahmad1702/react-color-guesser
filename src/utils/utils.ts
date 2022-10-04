import { Guess } from "../App";

export const HEXCODE_CHARS: Array<string | number> = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const randomHexColor = (): string => {
  let str: string = "#";
  for (let i = 0; i < 6; i++) {
    const randInt: number = Math.floor(Math.random() * 10) + 1;
    str += HEXCODE_CHARS[randInt];
  }
  return str;
};

export const randomHexColorArr = (): string[] => {
  return [randomHexColor(), randomHexColor(), randomHexColor()];
};

export const rgbToHex = (rgbString: string) => {
  const rgbArr: number[] = rgbString
    .slice(4, rgbString.length - 1)
    .replace(" ", "")
    .split(",")
    .map((item) => parseInt(item));

  return (
    "#" +
    ((1 << 24) + (rgbArr[0] << 16) + (rgbArr[1] << 8) + rgbArr[2])
      .toString(16)
      .slice(1)
  );
};

export const randomNumThree = () => {
  return Math.floor(Math.random() * 3) + 1;
};

export const getNewQuestion = (): Guess => {
  const newChoices: string[] = randomHexColorArr();

  const payload: Guess = {
    correctAnswer: newChoices[randomNumThree()],
    choices: newChoices,
  };

  return payload;
};
