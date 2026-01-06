function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    let reply = botReply(message);
    addMessage("bot", reply);
  }, 500);
}

function addMessage(sender, text) {
  let chatBox = document.getElementById("chat-box");
  let msgDiv = document.createElement("div");
  msgDiv.className = sender;
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || 
    message.includes("hi") ||
    message.includes("hii") ||
    message.includes("hey") ) return "Hello! How can I help you?";
  if (message.includes("time")) return "I can help calculate travel time 🚗";
  if (
    message.includes("tell me about yourself") ||
    message.includes("what is a chatbot") ||
    message.includes("define chatbot")
  ) {
    return "A chatbot is a computer program that simulates human conversation. This chatbot is created using HTML for structure, CSS for design, and JavaScript for logic and responses.";
  }
  if (
    message.includes("how you make") ||
    message.includes("how is this chatbot made")
  ) {
    return "I am built using HTML for the interface, CSS for styling, and JavaScript to process user input and generate rule-based responses.";
  }
  if (message.includes("bye")) return "Goodbye! 👋";

  return "Sorry, I didn't understand that.";
}
