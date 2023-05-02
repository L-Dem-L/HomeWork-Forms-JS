// Get the message list element and the form element
const messageList = document.querySelector("#message-list ul");
const form = document.querySelector("#new-message form");

// Add an event listener for when the form is submitted
form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and message input elements
    const usernameInput = form.querySelector("#username");
    const messageInput = form.querySelector("#message");

    // Create a new list item element and populate it with the username and message
    const li = document.createElement("li");
    const usernameSpan = document.createElement("span");
    const messageSpan = document.createElement("span");
    usernameSpan.textContent = usernameInput.value + ": ";
    messageSpan.textContent = messageInput.value;
    li.appendChild(usernameSpan);
    li.appendChild(messageSpan);

    // Add the new list item to the message list
    messageList.appendChild(li);

    // Reset the form inputs
    form.reset();
});
