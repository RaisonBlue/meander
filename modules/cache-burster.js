function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default url => `${url}?burst=${getRandomInt(999999999)}`
