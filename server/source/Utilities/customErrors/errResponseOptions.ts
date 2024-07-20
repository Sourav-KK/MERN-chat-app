const errResponseOptions = (
  path: string,
  messsage: string,
  name: string,
  reason: string
) => {
  const options = Object.freeze({
    errPath: path,
    errMessage: messsage,
    errName: name,
    errReason: reason,
  });
  return options;
};

export default errResponseOptions;
