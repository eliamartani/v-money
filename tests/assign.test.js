import assign from '../src/assign';

test('assign undefined', () => {
  const result = assign(undefined, undefined);
  const expected = {};
  expect(result).toEqual(expected);
});

test('assign null', () => {
  const result = assign(null, null);
  const expected = {};
  expect(result).toEqual(expected);
});

test('assign error', () => {
  const result = assign({ foo: 'foo' }, null);
  const expected = { foo: 'foo' };
  expect(result).toEqual(expected);
});

test('assign', () => {
  const defaults = { a: 1, b: 2 };
  const config = { c: 3, a: 4 };
  const expected = Object.assign({}, defaults, config);
  const result = assign(defaults, config);
  expect(result).toEqual(expected);
});

test('falsy', () => {
  const defaults = { a: true, b: 2, c: 'teste' };
  const config = { a: false, b: null, c: '' };
  const expected = Object.assign({}, defaults, config);
  const result = assign(defaults, config);
  expect(result).toEqual(expected);
});
