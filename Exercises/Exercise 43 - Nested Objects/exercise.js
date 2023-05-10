const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};


function updateStudentInfo(key, value){
  student[key] = value;
}

let personalData = {name:"Kawira", surname:"Njoroge", age:"15"}
updateStudentInfo("personalData", personalData)

console.log(student.personalData)


