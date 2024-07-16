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

class InvalidUrlError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "InvalidUrlError";
  }
}

class MongoDBError extends Error {
  errCode: number;

  constructor(errCode: number, message: string) {
    super(message);
    this.errCode = errCode;
    this.name = "MongoDBError";
  }
}

export { EmailError, PasswordError, DuplicateError, EmptyFieldError,InvalidUrlError,MongoDBError };
// throw new PasswordError(404, "Entered password is incorrect");
