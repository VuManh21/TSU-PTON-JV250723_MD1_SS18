let student = {
    id : 1,
    name: "Nguyen Van A",
    gender : "nam",
    age : 20,
    mark : 8
}
let newstudent = {
    id : 2,
    name: "Nguyen Thi B",
    gender : "nu",
    age : 22,
    mark : 9
}
let students =[newstudent, newstudent];
 let maxmark = 0;
 let topstudent =null;
for (let i = 0; i < students.length; i++) {
   if (students[i].mark > maxmark) {
    maxmark = students[i].mark;
    topstudent = students[i];
   }
    
}
console.log(`diem  cao nhat ${maxmark} cua hoc sinh ${topstudent.name}`);
 