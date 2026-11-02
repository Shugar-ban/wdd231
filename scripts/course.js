const courses = [

{
    code:"CSE110",
    credits:2,
    subject:"CSE",
    completed:true
},

{
    code:"CSE111",
    credits:2,
    subject:"CSE",
    completed:true
},

{
    code:"CSE210",
    credits:2,
    subject:"CSE",
    completed:true
},

{
    code:"WDD130",
    credits:2,
    subject:"WDD",
    completed:true
},

{
    code:"WDD131",
    credits:2,
    subject:"WDD",
    completed:true
},

{
    code:"WDD231",
    credits:2,
    subject:"WDD",
    completed:false
}

];

const courseContainer =
document.querySelector("#course-container");

function displayCourses(courseList){

    courseContainer.innerHTML = "";

    courseList.forEach(course=>{

        const card =
        document.createElement("div");

        card.classList.add("course");

        if(course.completed){
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.code}</h3>
        `;

        courseContainer.appendChild(card);

    });

    const totalCredits =
    courseList.reduce(
        (total, course) =>
        total + course.credits,
        0
    );

    document.querySelector(
        "#creditTotal"
    ).textContent =
    `The total credits for courses listed above is ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#allBtn")
.addEventListener("click", () => {

    displayCourses(courses);

});

document.querySelector("#wddBtn")
.addEventListener("click", () => {

    displayCourses(
        courses.filter(
            course =>
            course.subject === "WDD"
        )
    );

});

document.querySelector("#cseBtn")
.addEventListener("click", () => {

    displayCourses(
        courses.filter(
            course =>
            course.subject === "CSE"
        )
    );

});