// Write your code here!
// Step 1: Remove the <main> element with id "main"
const main = document.querySelector('main#main');
main.remove();

// Step 2: Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');

// Step 3: Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Step 4: Set the text content of the new <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Step 5: Append the new <h1> element to the document body
document.body.appendChild(newHeader);
