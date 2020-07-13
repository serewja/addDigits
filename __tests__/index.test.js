import addDigits from "../dist/index.js"

test('test', () => {
  expect(addDigits(10)).toBe(1);
  expect(addDigits(19)).toBe(1);
  expect(addDigits(10)).toBe(1);
  expect(addDigits(38)).toBe(2);
  expect(addDigits(1259)).toBe(8);
});