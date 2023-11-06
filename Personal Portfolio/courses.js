/*

Author: Zhicheng He
Student ID: 041086226
Section: CST8285_301
Professor: Shehzeen Shehzeen
File name: courses.js
Date: Jul. 07, 2023
Description: Assignment 01 courses javascript file

*/
const courses = [
    { level: "1", courseCode: 'ENL1813T', title: 'Communications I', description: 'Introduction to Communications', image: './image/ENL1813.jpg' },
    { level: "1", courseCode: 'CST8101', title: 'Computer Essentials', description: 'Introduction to Computer Basics', image: './image/CST8101.jpg' },
    { level: "1", courseCode: 'CST8116', title: 'Intro to Computer Programming', description: 'Introduction to Programming Concepts', image: './image/CST8116.jpg' },
    { level: "1", courseCode: 'CST8215', title: 'Introduction to Database', description: 'Introduction to Database Concepts', image: './image/CST8215.jpg' },
    { level: "1", courseCode: 'MAT8001C', title: 'Tech Math for Computer Science', description: 'Introduction to Technical Mathematics', image: './image/MAT8001.JPG' },
    { level: "2", courseCode: 'ENL2019T', title: 'Technical Communication for Engineering Technologies', description: 'Advanced Technical Communication', image: './image/ENL2019.png' },
    { level: "2", courseCode: 'CST2355', title: 'Database Systems', description: '', image: './image/CST2355.jpg' },
    { level: "2", courseCode: 'CST8102', title: 'Operating System Fundamentals (GNU/Linux)', description: 'Understanding Operating Systems', image: './image/CST8102.jpg' },
    { level: "2", courseCode: 'CST8283', title: 'Business Programming', description: 'Programming for Business Applications', image: './image/CST8283.jpg' },
    { level: "2", courseCode: 'CST8284', title: 'Object Oriented Programming (Java)', description: 'Java Programming Concepts', image: './image/CST8284.jpg' },
    { level: "2", courseCode: 'CST8285', title: 'Web Programming', description: 'Introduction to Web Development', image: './image/CST8285.jpg' }
];
function displayCourses(courseList) {
    const courseListElement = document.getElementById('course-list');

    // clear previous course list
    courseListElement.innerHTML = '';

    // add each course to the course list
    courseList.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-item';
        courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div>
                <div class="title">${course.title}</div>
                <div class="level">Level: ${course.level}</div>
                <div class="course-code">Course Code: ${course.courseCode}</div>
                <div class="description">${course.description}</div>
            </div>`;
        courseListElement.appendChild(courseElement);
    });
}

// display all courses on page load
displayCourses(courses);

// search function
document.getElementById('search-input').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    let filterLevel = document.getElementById('level-filter').value;
    let sort = document.getElementById('level-sort').value;

    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm) && course.level.includes(filterLevel));
    if (sort === 'asc') {
        filteredCourses.sort(function (a, b) {
            return a.level - b.level;
        });
    } else {
        filteredCourses.sort(function (a, b) {
            return b.level - a.level;
        });
    }

    displayCourses(filteredCourses);
});

// filter function
document.getElementById('level-filter').addEventListener('change', function (event) {
    const filterLevel = event.target.value;
    let search = document.getElementById('search-input');
    let searchTerm = search.value.toLowerCase();
    let sort = document.getElementById('level-sort').value;
    const filteredCourses = courses.filter(course => (course.level.includes(filterLevel) && course.title.toLowerCase().includes(searchTerm)));
    if (sort === 'asc') {
        filteredCourses.sort(function (a, b) {
            return a.level - b.level;
        });
    } else {
        filteredCourses.sort(function (a, b) {
            return b.level - a.level;
        });
    }

    displayCourses(filteredCourses);

});

// sort function
document.getElementById('level-sort').addEventListener('change', function (event) {
    const sort = event.target.value;
    let filterLevel = document.getElementById('level-filter').value;
    let search = document.getElementById('search-input');
    let searchTerm = search.value.toLowerCase();
    const filteredCourses = courses.filter(course => (course.level.includes(filterLevel) && course.title.toLowerCase().includes(searchTerm)));

    if (sort === 'asc') {
        filteredCourses.sort(function (a, b) {
            return a.level - b.level;
        });
    } else {
        filteredCourses.sort(function (a, b) {
            return b.level - a.level;
        });
    }


    displayCourses(filteredCourses);
});
