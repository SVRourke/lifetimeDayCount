const daysSinceBirth = (birthday) => {
  return parseInt((Date.now() - new Date(birthday)) / (1000 * 60 * 60 * 24));
};
