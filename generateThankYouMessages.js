// Array of names
let names = ["Monstera Deliciosa", "Fiddle Leaf Fig", "Pilea", "Golden Pothos"];

// Create a new, empty array to hold the messages
let messages = [];

// Iterate through the input array and build 'thank you' messages
for (let name of names) {
    let message = `Thank you for taking care of ${name}!`;
    messages.push(message); // Add message to the array
}

// Log messages to verify in the console (optional)
console.log(messages);

// Node.js File System module to write messages to a text file
const fs = require('fs');

// Define the file path
const filePath = 'thank_you_messages.txt';

// Join messages into a single string with line breaks
const messagesText = messages.join('\n');

// Write messages to the text file
fs.writeFile(filePath, messagesText, (err) => {
    if (err) throw err;
    console.log(`Messages have been saved to ${filePath}`);
});
