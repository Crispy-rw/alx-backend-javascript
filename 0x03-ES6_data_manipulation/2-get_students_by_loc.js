export default function getStudentsByLocation(objArray, city) {
  if (!Array.isArray(objArray)) return [];

  return objArray.filter((obj) => obj.location === city);
}
