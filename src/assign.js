const assign = (defaults = {}, extras = {}) => ({
  ...defaults,
  ...extras,
});
export default assign;
