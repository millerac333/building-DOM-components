// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

document.querySelector("#messages")
const messages = document.createElement('div')

const box1 = document.createElement('section')
box1.className = "message"
box1.textContent = "Lebron James"

messages.appendChild(box1)

const box2 = document.createElement('section')
box2.className = "message"
box2.textContent = "Stephen Curry"

messages.appendChild(box2)

const box3 = document.createElement('section')
box3.className = "message"
box3.textContent = "Russell Westbrook"

messages.appendChild(box3)

const box4 = document.createElement('section')
box4.className = "message"
box4.textContent = "Kyrie Irving"

messages.appendChild(box4)

const box5 = document.createElement('section')
box5.className = "message"
box5.textContent = "Kevin Durant"

messages.appendChild(box5)

console.log(messages)




