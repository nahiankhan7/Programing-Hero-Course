class Students {
  constructor(id, fullName, department, roll, gpa) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.roll = roll;
    this.gpa = gpa;
  }
}

const allStudent = [
  new Students(1, "Alex Neo", "Computer", 133436, 3.92),
  new Students(2, "Rolex Dio", "Electrical", 134404, 4.52),
  new Students(3, "Martina Ore", "Civil", 1632456, 3.66),
  new Students(4, "Leno Pa", "Automotive", 131739, 4.44),
  new Students(5, "Karo Peter", "Electronics", 135573, 2.31),
];

const randomIndex = Math.floor(Math.random() * allStudent.length);
const student = allStudent[randomIndex];

const sid = document.getElementById("id");
const sName = document.getElementById("fullName");
const sDept = document.getElementById("department");
const sRoll = document.getElementById("roll");
const sGpa = document.getElementById("gpa");

sid.innerText = `Id: ${student.id}`;
sName.innerText = `Name: ${student.fullName}`;
sDept.innerText = `Dept: ${student.department}`;
sRoll.innerText = `Roll: ${student.roll}`;
sGpa.innerText = `GPA: ${student.gpa}`;
