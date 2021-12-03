export default function setFromArray(myArray) {
  if (!Array.isArray(myArray)) throw Error('Argument is not an array');

  const mySet = new Set(myArray);
  return mySet;
}
