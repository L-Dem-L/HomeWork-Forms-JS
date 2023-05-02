/*
    Я пробував виконати це завдання, як було задано, але у мене цього не виходило правильно зробити
    Тому я зробив так, що можна зазначити лише кількість присутніх, а не кожного студента окремо
    Можливо, до цього завдання є простіше рішення, яке буде відповідати умові, але поки що я його не знайшов
    Хотів би перепросити за це
*/

// Масиви з відміченою присутністю
const attendanceRecords = [
    { group: "", lesson: "", topic: " ", attendance: [] },
    { group: "", lesson: "", topic: " ", attendance: [] },
    { group: "", lesson: "", topic: " ", attendance: [] },
    { group: "", lesson: "", topic: " ", attendance: [] },
];

function markAttendance() {
    // Отримання значень форми
    const group = document.getElementById("group").value;
    const lesson = document.getElementById("lesson").value;
    const topic = document.getElementById("topic").value;
    const attendance = document.getElementById("attendance").value.split(",");

    // Додавання нового запису до масиву
    attendanceRecords.push({ group, lesson, topic, attendance });

    // Оновлення таблиці з відміченою присутністю
    const table = document.getElementById("attendanceTable");
    const newRow = table.insertRow(-1);
    const groupCell = newRow.insertCell(0);
    const lessonCell = newRow.insertCell(1);
    const topicCell = newRow.insertCell(2);
    const attendanceCell = newRow.insertCell(3);

    groupCell.innerHTML = group;
    lessonCell.innerHTML = lesson;
    topicCell.innerHTML = topic;
    attendanceCell.innerHTML = attendance.join(", ");

    // Очищення форми відмітки присутніх
    document.getElementById("topic").value = "";
    document.getElementById("attendance").value = "";
}
