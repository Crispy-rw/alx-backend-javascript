export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  let res = '';
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      res = `${res + element.substr(startString.length)}-`;
    }
    return res;
  });
  return res.substring(0, res.length - 1);
}
