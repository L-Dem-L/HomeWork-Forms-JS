let cart = {}; // Об'єкт замовлення

function addToCart(book) {
    if (cart[book]) {
        cart[book]++;
    } else {
        cart[book] = 1;
    }
    alert(`Книга ${book} додана до кошика.`);
}

function submitOrder() {
    // Отримання значень форми
    const book = document.getElementById("book").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const deliveryDate = document.getElementById("delivery_date").value;
    const address = document.getElementById("address").value;
    const comment = document.getElementById("comment").value;

    // Створення повідомлення
    const message = `${name}, дякуюємо за замовлення. ${book} буде доставлена ${deliveryDate} за адресою ${address}. Коментар: ${comment}`;

    // Виведення повідомлення на екран
    alert(message);

    // Очищення форми та кошика замовлення
    document.getElementById("book").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("name").value = "";
    document.getElementById("delivery_date").value = "";
    document.getElementById("address").value = "";
    document.getElementById("comment").value = "";
    cart = {};
}