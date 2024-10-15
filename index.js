// Write your code here!

// Step 1: Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Step 2: Create a new <h1> element and set its id to 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Step 3: Set the text content for the new header
// Replace "YOUR-NAME" with your actual name, or any other name you'd like
newHeader.textContent = "YOUR-NAME is the champion";

// Step 4: Append this new element to the body (or another part of the DOM as needed)
document.body.appendChild(newHeader);
