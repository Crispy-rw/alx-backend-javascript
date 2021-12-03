export default function updateStudentGradeByCity(objArray, city, newGrades) {
  return objArray.filter((obj) => obj.location === city).map((obj) => {
    const gradeObj = newGrades.find((newGrade) => newGrade.studentId === obj.id);
    if (gradeObj !== undefined) {
      obj.grade = gradeObj.grade; // eslint-disable-line no-param-reassign
    } else {
      obj.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return obj;
  });
}
