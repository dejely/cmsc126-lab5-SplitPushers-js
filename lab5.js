const available_courses = [
    "BA Food Appreciation",
    "BA Applied Poetry of the Future",
    "BS Computer Repair Shop",
    "BS Video Gaming",
    "BS Installing and Downloading",
]

class Student{

    constructor(studentId, name, age, email, course){
        this.studentId = studentId;
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
    }
    
}

function time_now(){
    
    document.getElementById("btn").addEventListener("click", function () {
        const now = new Date();

        const dateNow  = "Today is " + now.toLocaleDateString('en-US',{
            month: 'long',
            day: 'numeric',
            year: 'numeric',

        });
        const timeNow = "The current time is " + now.toLocaleTimeString('en-US',{
            hour: 'numeric',
            minute: '2-digit'
        });
        document.getElementById("date").textContent = dateNow;
        document.getElementById("time").textContent = timeNow;

    }) 

}

let student = [];
let displayHeader = 
    `<tr>
        <th>Student ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Course</th>
    </tr>`;

function add_student(event){
    event.preventDefault();
    let valid = true;
    //generate student ID
    let Id = generateDigits();
    const registree = new Student( 
        Id,
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("email").value,
        document.getElementById("course-select").value
    );

    let errors = [];
    //check name
    if (registree.name.length <= 5){
        errors.push("Name should be greater than 5 characters.");
    }
    if ((registree.name.includes(' ')) == false){
        errors.push("Name should contain a whitespace.")
    }

    //check age
    if (registree.age <=18){
        errors.push("Age should be greater than 18.");
    }
    if (registree.age >=99){
        errors.push("Age should be less than 99.");
    }

    //check email
    if (registree.email.endsWith("@up.edu.ph") == false){
        errors.push("Not a valid UP mail.")
    }
    for (let i = 0; i < student.length; i++){
        if (registree.email == student[i].email){
            errors.push("Email is already in use")
        }
    }

    //check course
    if (registree.course == ""){
        errors.push("Select a valid course.")

    }

    if (errors.length == 0){
        student.push(registree);
        alert("Student sucessfully registered!")
    }
    else{
        let out = errors.join("\n");
        alert(out);
    }
}

function generateDigits(){
    let x = Math.floor(Math.random()*100000)
    x.toString();
    id = "2024" + x;
    console.log(`Generated ${x}`)
    for (i = 0; i < student.length; i++) {
        if (student[i].studentId == id){
            return generateDigits();
        }
        else{
            return id;
        }
    }
    return id;
}

function searchStudent(){
    let resultTable = document.getElementById("search_results");
    let name_query = document.getElementById("student_name_query").value;
    //find student
    for (let i = 0; i < student.length; i++){
        if(student[i].name == name_query){
            resultTable.style.display = "block";
            resultTable.innerHTML = displayHeader;
            let row = resultTable.insertRow(-1);
            let entry =
            `
            <td>${student[i].studentId}</td>
            <td>${student[i].name}</td>
            <td>${student[i].age}</td>
            <td>${student[i].email}</td>
            <td>${student[i].course}</td>`;
            row.innerHTML = entry;
        }
    }
}

function displayAll(){
    let displayTable = document.getElementById("display_table");

    if (student.length > 0){
        displayTable.style.display = "block";
        displayTable.innerHTML = displayHeader;
        for (let i = 0; i < student.length; i++){
            let row = displayTable.insertRow(-1);
            let entry =
            `
            <td>${student[i].studentId}</td>
            <td>${student[i].name}</td>
            <td>${student[i].age}</td>
            <td>${student[i].email}</td>
            <td>${student[i].course}</td>`;
            row.innerHTML = entry;
        }
    }
    
}

function saveData(){
    let save = JSON.stringify(student);
    localStorage.setItem("students", save);
    console.log(`${save}`);
    console.log("Data Saved.");
}

function loadData(){
    let load = localStorage.getItem("students");
    if (load != null){
        console.log("Data Loaded.");
        student = JSON.parse(load);
    }
}

function clearData(){
    student = [];
    localStorage.removeItem("students");
    console.log("Data Cleared.");
}
