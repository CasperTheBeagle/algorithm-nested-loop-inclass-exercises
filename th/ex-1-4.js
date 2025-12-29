/* 
ให้เขียน Function ที่ชื่อว่า showStudentsData ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ studentInfo
        1. studentInfo เป็น Array ของ Object ที่บรรจุรายชื่อนักเรียน โดย Object แต่ละอันจะมี Key 4 ตัวได้แก่  name , age,  classNumber, favoriteSubject
    - Function นี้จะเข้าถึงข้อมูลใน studentInfo แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ดังนี้
*/

// Start coding here

const studentsInfo = [
  { name: "Alice", age: 14, classNumber: 8, favoriteSubject: "Math" },
  { name: "Charlie", age: 15, classNumber: 9, favoriteSubject: "History" },
  { name: "Ethan", age: 13, classNumber: 7, favoriteSubject: "Art" },
];

// function showStudentsData(studentsInfo) {
//   let output = "";
//   for (let student of studentsInfo) {
//     output += `name: ${student.name} \n`;
//     output += `age: ${student.age} \n`;
//     output += `classNumber: ${student.classNumber} \n`;
//     output += `favoriteSubject: ${student.favoriteSubject} \n`;
//     output += `-------------------\n`;
//   }
//   return output;
// }

function showStudentsData(studentInfo) {
  let output = "";

  // ลูปชั้นนอก: วนลูปผ่าน Array ของนักเรียน (Outer Loop)
  for (let i = 0; i < studentInfo.length; i++) {
    let student = studentInfo[i];

    // ลูปชั้นใน: วนลูปผ่าน Key ของ Object ในแต่ละคน (Inner Loop)
    for (let key in student) {
      output += `${key}: ${student[key]} \n`;
    }

    output += `-------------------\n`;
  }

  return output;
}

console.log(showStudentsData(studentsInfo));

/*
  name: Alice 
  age: 14 
  classNumber: 8 
  favoriteSubject: Math 
  -------------------
  name: Charlie 
  age: 15 
  classNumber: 9 
  favoriteSubject: History 
  -------------------
  name: Ethan 
  age: 13 
  classNumber: 7 
  favoriteSubject: Art 
  -------------------
  */
