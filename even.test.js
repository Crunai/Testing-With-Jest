import { isEven } from "./even";

test('4 is even', () => {
  expect(isEven(4)).toStrictEqual(true);
});

test('0 is even', () => {
  expect(isEven(0)).toStrictEqual(true);
});

test('-3 is odd', () => {
  expect(isEven(-3)).toStrictEqual(false);
});