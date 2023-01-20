module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const sortedConfig = bracketsConfig.map((item) => item.join(""));

  while (str) {
    for (i = 0; i < sortedConfig.length; i++) {
      str = str.replaceAll(sortedConfig[i], "");
    }
    if (str && sortedConfig.every((item) => !str.includes(item))) {
      return false;
    }
  }

  return !str;
};
