// Predefined chatbot responses
const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm doing great! 😊",
    "what is your name": "I'm an AI chatbot created to help you!",
    "bye": "Goodbye! Have a great day! 👋",
    "default": "Sorry, I didn't understand that. Can you please rephrase?",
    "khushali": "jadi"
};

// Function to send user message and get bot response
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Append user message to chat
    appendMessage("user", userInput);

    // Get bot response
    const botReply = getBotResponse(userInput.toLowerCase());
    setTimeout(() => {
        appendMessage("bot", botReply);
    }, 500);

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Function to generate chatbot responses
function getBotResponse(input) {
    return botResponses[input] || botResponses["default"];
}

// Function to append messages to chat
function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

// Enable sending message by pressing Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
