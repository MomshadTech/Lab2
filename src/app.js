const students = JSON.parse(localStorage.getItem("students")) || [];

document.getElementById("studentCount").textContent = students.length;

const lastAttendance =
    JSON.parse(localStorage.getItem("lastAttendance")) || null;

if (lastAttendance) {
    document.getElementById("presentCount").textContent =
        lastAttendance.present;

    document.getElementById("attendanceDate").textContent =
        lastAttendance.date;
}