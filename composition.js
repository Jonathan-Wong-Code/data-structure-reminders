const students = [
  { sex: "m", grade: 75 },
  { sex: "f", grade: 100 },
  { sex: "f", grade: 50 },
  { sex: "f", grade: 70 },
  { sex: "m", grade: 25 },
  { sex: "m", grade: 50 },
  { sex: "m", grade: 75 },
  { sex: "m", grade: 80 }
];

// function not(fn) {
//   return function negated(value) {
//     return !fn(value);
//   };
// }

const composeTwo = (fn2, fn1) => value => fn2(fn1(value));
const not = fn => value => !fn(value);

const isAboveFifty = grade => grade > 50;
const isBoy = student => student.sex === "m";
const isGirl = not(isBoy);

const getBoyGrades = students => students.filter(isBoy);
const getGirlGrades = students => students.filter(isGirl);
const addBonusToGrade = students =>
  students.map(student => ({ ...student, grade: student.grade + 50 }));
const getHighestGrade = students =>
  Math.max(...students.map(student => student.grade));

const returnAverageGrades = students =>
  students.reduce((acc, curr) => {
    return acc + curr.grade;
  }, 0) / students.length;

const getHighestBoyGrades = composeTwo(getHighestGrade, getBoyGrades)(students);
const addBonusToGirls = composeTwo(addBonusToGrade, getGirlGrades)(students);

const averageGirlGrades = composeTwo(
  returnAverageGrades,
  getGirlGrades
)(students);

console.log(averageGirlGrades);
