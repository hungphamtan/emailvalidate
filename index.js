const isEmail = (str) => {
  return /([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(str);
};

module.exports = isEmail;
