// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

//PRACTICE EXCERCISE ONE

document.querySelector("#messages");
const messages = document.createElement("div");

const chatMessage1 = document.createElement("section");
chatMessage1.className = "message";
chatMessage1.textContent = "Lebron James";

messages.appendChild(chatMessage1);

const chatMessage2 = document.createElement("section");
chatMessage2.className = "message";
chatMessage2.textContent = "Stephen Curry";

messages.appendChild(chatMessage2);

const chatMessage3 = document.createElement("section");
chatMessage3.className = "message";
chatMessage3.textContent = "Russell Westbrook";

messages.appendChild(chatMessage3);

const chatMessage4 = document.createElement("section");
chatMessage4.className = "message";
chatMessage4.textContent = "Kyrie Irving";

messages.appendChild(chatMessage4);

const chatMessage5 = document.createElement("section");
chatMessage5.className = "message";
chatMessage5.textContent = "Kevin Durant";

messages.appendChild(chatMessage5);

// PRACTICE EXCERCISE TWO -REFACTOR EXERCISE ONE

const fragmentbox = document.createDocumentFragment();

const textMessage1 = document.createElement("p");
textMessage1.textContent = "Lebron James";
fragmentbox.appendChild(textMessage1);
document.querySelector("#messages").appendChild(fragmentbox);

const textMessage2 = document.createElement("p");
textMessage2.textContent = "Stephen Curry";
fragmentbox.appendChild(textMessage2);
document.querySelector("#messages > p:nth-child(1)").appendChild(fragmentbox);

const textMessage3 = document.createElement("p");
textMessage3.textContent = "Russell Westbrook";
fragmentbox.appendChild(textMessage3);
document.querySelector("#messages > p:nth-child(1)").appendChild(fragmentbox);

const textMessage4 = document.createElement("p");
textMessage4.textContent = "Kyrie Irving";
fragmentbox.appendChild(textMessage4);
document.querySelector("#messages > p:nth-child(1)").appendChild(fragmentbox);

const textMessage5 = document.createElement("p");
textMessage5.textContent = "Kevin Durant";
fragmentbox.appendChild(textMessage5);
document.querySelector("#messages > p:nth-child(1)").appendChild(fragmentbox);
