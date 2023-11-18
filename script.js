const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

//   to store age in seprate array
let arr = [];
for (let i = 0; i < data.length; i++) {
  for (x in data[i]) {
    if (x == "age") {
      arr.push(data[i][x]);
    }
  }
}

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    for (x in data[i]) {
      // console.log(x);
      if (data[i][x] == "developer") {
        console.log(data[i].name);
      }
    }
  }
}

// 2. Add Data
function addData() {
  let name = prompt("enter name:");
  let age = prompt("enter age:");
  let profession = prompt("enter profession:");
  let newobj = { name: name, age: parseInt(age), profession: profession };
  data.push(newobj);
  console.log(data);
}
// 3. Remove Admins
function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
        for (x in data[i]) {
          // console.log(x);
          if (data[i][x] == "admin") {
         delete data.profession;
            
          }
        }
      }
      console.log(data);
}
// 4. Concatenate Array
function concatenateArray() {
  let dummyarr = [
    { name: "lateef", age: 23, profession: "developer" },
    { name: "abc", age: 23, profession: "designer" },
  ];
  let finalarray = data.concat(dummyarr);
  console.log(finalarray);
}
// 5. Average Age
let sum = 0;
function averageAge() {
  {
    for (let i = 0; i < arr.length; i++) sum = sum + arr[i];
  }

  console.log(sum / arr.length);
}
// 6. Age Check
flag = 0;
function checkAgeAbove25() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 25) {
      flag = 1;
    }
  }
  if (flag == 1) {
    console.log("yes here is some one whoes age is above 25");
  } else {
    console.log("no");
  }
}
//   used to store profession seprately
let newarr = [];
for (let j = 0; j < data.length; j++) {
  for (x in data[j]) {
    if (x == "profession") newarr.push(data[j][x]);
  }
}
// 7. Unique Professions
function uniqueProfessions() {
  for (let k = 0; k < newarr.length; k++) {
    console.log(newarr[k]);
  }
}

// 8. Sort by Age
function sortByAge() {
    data.sort((a,b) => a.age-b.age);
    console.log("sort by age",data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data[0].profession = "manager";
  console.log(data);
}
// 10. Profession Count
function getTotalProfessions() {
  console.log(newarr.length);
}
