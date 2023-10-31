const CATEGORY_DATA = Object.freeze({
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
});

const getCategoryName = (category) => {
  return CATEGORY_DATA[category];
};

const getRandomNumber = (lowerLimit = 1, upperLimit= 4) => {
  return Math.floor(Math.random() * upperLimit) + lowerLimit;
}

export { getCategoryName, getRandomNumber };
