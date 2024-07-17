function capitalizeLetter(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word: string) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
export default capitalizeLetter;