const aplhabetsRegex = /^[A-Za-z\s]+$/;

const alphaNumsSplCharRegex = /^[a-zA-Z0-9!@#$%&_+=?]*$/;

const genderRegex = /\b(Female|Male)\b/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?<>])(?!.*\s).{6,}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export {
  aplhabetsRegex,
  alphaNumsSplCharRegex,
  genderRegex,
  emailRegex,
  passwordRegex,
};
