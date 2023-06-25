// function buyOnions(){
//     console.log("go to market");
//     console.log("buy onions");
//     console.log("and come back")

// }

// buyOnions();

// var day = "Friday";
// var date = 14
// buyOnions();

// function onionPrice(num){
//     var price = num * 20;
//    return price;
// }

// var OneMonthAgo = onionPrice(50)
// var twoDaysAgo = onionPrice(500);
// console.log(OneMonthAgo, twoDaysAgo)

// var student = {id:111, phone:1730277, name:"Hasan"}
// var student2 = {id:122, phone:175533, name:"Murshedul"}

// var idNo = "id"
// var phoneNo = student.phone
// var sName = student2["name"]
// var sId = student[idNo];
// //Update phone no.
// student.phone = 199999;
// student2["phone"] = 9999111;
// student2.address = "kana hafez mor, Dinajpur"

// console.log(student)
// console.log(student2)

function findOddSum(arrOfNumbers) {
    let sum = 0
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] % 2 !== 0) {
      sum += arrOfNumbers[i]
    }
  }
  console.log(sum)
}
findOddSum([5, 7, 8, 10, 45, 30]);
