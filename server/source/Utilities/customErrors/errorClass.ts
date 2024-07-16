class EmailError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "InvalidEmail";
  }
}

class PasswordError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "PasswordError";
  }
}

class DuplicateError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "DuplicateError";
  }
}

class EmptyFieldError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "EmptyFieldError";
  }
}

export { EmailError, PasswordError, DuplicateError, EmptyFieldError };
// throw new PasswordError(404, "Entered password is incorrect");
