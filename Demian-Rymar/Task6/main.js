/*
    Тут схожа проблема, як і в попередньому завданні
    Місця можна вводити лише текстово, в не вибирати самому
*/

// Масив з заброньованими місцями
const bookingRecords = [
    { direction: "Lviv-Kyiv", date: "2023-05-15", seats: ["1A", "2B", "3C"] },
    { direction: "Kyiv-Lviv", date: "2023-05-20", seats: ["4D", "5E", "6F"] },
];

function bookTickets() {
    // Отримання значень форми
    const direction = document.getElementById("direction").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value.split(",");

    // Додавання нового запису до масиву
    bookingRecords.push({ direction, date, seats });

    // Оновлення таблиці з заброньованими місцями
    const table = document.getElementById("bookingTable");
    const row = table.insertRow(-1);
    const directionCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const seatsCell = row.insertCell(2);
    directionCell.innerHTML = direction;
    dateCell.innerHTML = date;
    seatsCell.innerHTML = seats.join(", ");
}

function displayBookingRecords() {
    // Отримання таблиці з заброньованими місцями
    const table = document.getElementById("bookingTable");

    // Очистка таблиці
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }

    // Додавання записів до таблиці
    for (const record of bookingRecords) {
        const row = table.insertRow(-1);
        const directionCell = row.insertCell(0);
        const dateCell = row.insertCell(1);
        const seatsCell = row.insertCell(2);
        directionCell.innerHTML = record.direction;
        dateCell.innerHTML = record.date;
        seatsCell.innerHTML = record.seats.join(", ");
    }
}

// Приклад використання
document.getElementById("bookBtn").addEventListener("click", bookTickets);
document.getElementById("displayBtn").addEventListener("click", displayBookingRecords);

// Ініціалізація таблиці з заброньованими місцями
displayBookingRecords();