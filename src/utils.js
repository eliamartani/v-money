import defaults from './options';

const format = (input = '', opt = defaults) => {
  if (typeof input === 'number') {
    input = input.toFixed(fixed(opt.precision));
  }

  const negative = input.indexOf('-') >= 0 ? '-' : '';
  const numbers = onlyNumbers(input);
  const currency = numbersToCurrency(numbers, opt.precision);
  let [integer, decimal] = toStr(currency).split('.');

  integer = addThousandSeparator(integer, opt.thousands);

  return opt.prefix + negative + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
};

const unformat = (input = '', precision) => {
  const negative = input.indexOf('-') >= 0 ? -1 : 1;
  const numbers = onlyNumbers(input);
  const currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
};

const onlyNumbers = input => toStr(input).replace(/\D+/g, '') || '0';

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
const fixed = precision => Math.max(0, Math.min(precision, 20));

const numbersToCurrency = (numbers, precision) => {
  const exp = Math.pow(10, precision);
  const float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
};

const addThousandSeparator = (integer, separator) =>
  integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);

const joinIntegerAndDecimal = (integer, decimal, separator) =>
  decimal ? integer + separator + decimal : integer;

const toStr = value => (value ? value.toString() : '');

const setCursor = (el, position) => {
  const setSelectionRange = () => el.setSelectionRange(position, position);

  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
};

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
const event = name => {
  const evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
};

export { format, unformat, setCursor, event };
