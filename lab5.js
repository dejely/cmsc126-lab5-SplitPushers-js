const available_courses = [
    "BA Food Appreciation",
    "BA Applied Poetry of the Future",
    "BS Computer Repair Shop",
    "BS Video Gaming",
    "BS Installing and Downloading",
]

class Student{

    constructor(studentId, name, age, email, course){
        this.studentId = studentId
        this.name = name
        this.age = age
        this.email = email
        this.course = course
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

function add_student(){

}