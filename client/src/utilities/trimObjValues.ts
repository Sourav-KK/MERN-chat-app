export function trimObjectValues(obj: any) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}
