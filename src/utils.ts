const HEXCODE_CHARS: Array<string | number> = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
export const randomHex = (): string => {
  let hexStr = '#';
  for (let i = 0; i < 6; i++) {
    hexStr += HEXCODE_CHARS[Math.floor(Math.random() * HEXCODE_CHARS.length - 1) + 1];
  }
  return hexStr;
};