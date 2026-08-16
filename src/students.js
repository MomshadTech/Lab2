let students = JSON.parse(localStorage.getItem("students")) || [];

const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents() {
    studentTable.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentClass}</td>
            <td>${student.roll}</td>
            <td>
                <button class="delete-btn" onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        studentTable.appendChild(row);
    });
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();
    const roll = document.getElementById("roll").value.trim();

    students.push({
        name,
        studentClass,
        roll
    });

    saveStudents();
    displayStudents();
    studentForm.reset();
});

function deleteStudent(index) {
    students.splice(index, 1);
    saveStudents();
    displayStudents();
}

displayStudents();