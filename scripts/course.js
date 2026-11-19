const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Programming Building Blocks",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Introduction to programming concepts and problem solving.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Programming using functions and modular design.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Software Development",
        description: "Object-oriented programming principles using classes.",
        technology: ["C#", ".NET"],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web Development",
        description: "Introduction to web design and development.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web Development",
        description: "Building dynamic websites with JavaScript.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        certificate: "Web Development",
        description: "Frontend development using modern JavaScript techniques.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const courseDetails = document.querySelector("#course-details");
const creditTotal = document.querySelector("#creditTotal");

function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal" aria-label="Close">❌</button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Certificate:</strong> ${course.certificate}</p>

        <p><strong>Description:</strong> ${course.description}</p>

        <p><strong>Technology Stack:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal")
        .addEventListener("click", () => {
            courseDetails.close();
        });
}

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach((course) => {

        const courseCard = document.createElement("button");

        courseCard.classList.add("course");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `;

        courseCard.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        courseContainer.appendChild(courseCard);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent =
        `The total credits for courses listed above is ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#allBtn").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wddBtn").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "WDD")
    );
});

document.querySelector("#cseBtn").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "CSE")
    );
});

courseDetails.addEventListener("click", (event) => {
    if (event.target === courseDetails) {
        courseDetails.close();
    }
});
