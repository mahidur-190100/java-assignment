/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
if (0 < area && area <= 10 ** 9) {
  var output = area / 2;
}
console.log(output);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000 && money < 25000) {
  console.log("Cycle");
} else if (money < 10000) {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4;
//write your code here
if (lastDay > 3 && lastDay <= 30) {
  for (var i = 1; i <= lastDay; i++) {
    // console.log(i)
    if (i % 3 === 0) {
      console.log(i + "-Medicine");
    } else {
      console.log(i + "- rest");
    }
  }
} 
else {
    console.log("Invalid Input");
}



/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here
var array = fileName.split(".");
var ext = array[array.length - 1]; 
if (fileName[0] === '#' || ext === 'pdf' || ext === 'docx') {
    console.log("Store");
} else {
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email)



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
    currentSalary += currentSalary * 0.05;
}
currentSalary = currentSalary.toFixed(2);
console.log(currentSalary);
