const typoList = [
  {
    type: "camel",
    word: "errorMassage",
    fix: "errorMessage"
  },
  {
    type: "UpperCamel",
    word: "ErrorMassage",
    fix: "ErrorMessage"
  },
  {
    type: "snake_case",
    word: "error_massage",
    fix: "error_message"
  },
  {
    type: "kebab-case",
    word: "error-massage",
    fix: "error-message"
  },
  {
    type: "UPPER_SNAKE_CASE",
    word: "ERROR_MASSAGE",
    fix: "ERROR_MESSAGE"
  }
];

export const checkTypo = text => {
  return typoList.find(type => type.word === text);
};