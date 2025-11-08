document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("courseInputForm");
    const courseCards = document.getElementById("courseCards");
    const creditTotal = document.getElementById("creditTotal");
    let courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers...',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects...',
            technology: ['C#'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        }
    ];

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const newCourse = {
            subject: data.get("subject"),
            number: parseInt(data.get("code")),
            title: data.get("name"),
            credits: parseInt(data.get("credits")),
            certificate: 'Web and Computer Programming',
            description: data.get("notes"),
            technology: [], // You can extend this to collect tech inputs
            completed: data.get("completed") === "on"
        };

        courses.push(newCourse);
        renderCourses();
        form.reset();
    });

    // Render course cards and total credits
    function renderCourses() {
        courseCards.innerHTML = "";

        courses.forEach(course => {
            const card = document.createElement("div");
            card.className = "course-card";
            card.innerHTML = `
        <h3>${course.subject} ${course.number}</h3>
        <p><strong>Title:</strong> ${course.title}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
        <p><strong>Status:</strong> ${course.completed ? "✅ Completed" : "❌ Incomplete"}</p>
      `;
            courseCards.appendChild(card);
        });

        const total = courses.reduce((sum, c) => sum + c.credits, 0);
        creditTotal.textContent = `Total Credits: ${total}`;
    }

    // Initial render
    renderCourses();
});