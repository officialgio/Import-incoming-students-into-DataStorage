// Use LocalStorage to store Data AKA Backend //
// Local Storage is an object with a key and a value
// The key is the name
// The value is a string




// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students"); //query b/c we're getting it from a selector
const nameInput = studentForm["name"]; //catch all the inputs
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students") ) || []; // return a string or an empty array / convert string into an array using JSON.parse b/c we want student to be an array

const addStudent = (name, age, roll) => {   //push an object ("{}") to name, age, roll.
    students.push({
        name,
        age,
        roll,
    });

    localStorage.setItem("students", JSON.stringify(students)) // add to local storage and convert array to a string / use JSON.stringify() to convert
    return { name, age, roll };
}; 

const createStudentElement = ({name, age, roll}) => {   //the parameters will contain its values
    // create elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
    
    // fill the elements with text
    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;

    // It adds to the DOM
    studentDiv.append(studentName, studentAge, studentRoll); // append the 3 elements within the div / append multiple use "append"
    studentsContainer.appendChild(studentDiv); // append div / append only 1 element then use "child"

    studentsContainer.style.display = students.length  === 0 ? "none" : "flex" // if the student is an empty array == the display wont show ELSE default
};

studentsContainer.style.display = students.length  === 0 ? "none" : "flex" // remove display style when student is deleted

//reference the function which is taking the 3 elements(name, age, roll)
students.forEach(createStudentElement);
studentForm.onsubmit = e => {
    e.preventDefault(); // prevents page reloading

    const newStudent = addStudent( // create a new student / call function
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent);
    
    // clear the inputs once creating a new student
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
  };
