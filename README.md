PRACTICE CREATING ELEMENTS 

You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

Put an article DOM element in your index.html with the id attribute value of messages.
In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
Create five (5) section elements, each with a class of message, and with textContent of your choosing.
Using appendChild(), attach each message as a child to the messages element.


createDocumentFragment()
What you did in the previous exercises was actually an expensive way of adding those elements to the DOM. Now, it didn't cost you any extra money, but it was expensive in terms of memory and processing power. When the DOM is written to, layout is 'invalidated', and at some point needs to be reflowed.

We can use a document fragment to reduce the processing and layout cost of constant, rapid-fire DOM updates. You can add as many components to it as you like, and then add the fragment to the DOM as a one-time operation.

// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#emperorList").appendChild(fragment)


PRACTICE DOCUMENT FRAGMENT 
Update your code from the previous exercise to add the chat messages to the messages elements via a document fragment.