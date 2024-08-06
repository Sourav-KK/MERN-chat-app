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

  constructor(message: string) {
    super(message);
    this.errCode = 404;
    this.name = "DuplicateError";
  }
}

class EmptyFieldError extends Error {
  errCode: number;

  constructor(message: string) {
    super(message);
    this.errCode = 422;
    this.name = "EmptyFieldError";
  }
}

class InvalidUrlError extends Error {
  errCode: number;

  constructor(message: string) {
    super(message);
    this.errCode = 404;
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

class DatabaseError extends Error {
  errCode: number;
  path: string;

  constructor(errCode: number, message: string, errPath: string) {
    super(message);
    this.errCode = errCode;
    this.name = "MongoDBError";
    this.path = errPath;
  }
}

class AuthenticationError extends Error {
  errCode: number;

  constructor() {
    super();
    this.message = "Please login";
    this.errCode = 401;
    this.name = "authError";
  }
}

export {
  EmailError,
  PasswordError,
  DuplicateError,
  EmptyFieldError,
  InvalidUrlError,
  MongoDBError,
  DatabaseError,
  AuthenticationError,
};
