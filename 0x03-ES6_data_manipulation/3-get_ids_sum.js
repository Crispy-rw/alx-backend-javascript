export default function getStudentIdsSum(objArray) {
  return objArray.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
}
