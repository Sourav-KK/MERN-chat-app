const aplhabets = /^[A-Za-z\s]+$/;

const alphaNumsSplChar = /^[a-zA-Z0-9!@#$%&_+=?]*$/;

const genderRegex = /\b(Female|Male)\b/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?<>])(?!.*\s).{6,}$/;

export { aplhabets, alphaNumsSplChar, genderRegex, emailRegex, passwordRegex };
