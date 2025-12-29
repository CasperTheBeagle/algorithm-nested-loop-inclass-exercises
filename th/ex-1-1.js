/* 
ให้เขียน Function ที่ชื่อว่า multiplyByTwo ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ matrix
        1. matrix เป็น Array 2 มิติที่บรรจุ Array ไว้
    - Function นี้จะนำตัวเลขแต่ละตัวที่บรรจุไว้ใน matrix มาคูณ 2 และบรรจุลงใน Array ใหม่จากนั้นจะ Return ค่า Array ใหม่ออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function multiplyByTwo(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j] * 2);
    }
  }
  return result;
}

const matrix = [
  [11, 22],
  [33, 44],
  [55, 66],
];

console.log(multiplyByTwo(matrix)); // [ 22, 44, 66, 88, 110, 132 ]