// Targeting elements
const firstModalButton = document.querySelector('.first');
const secondModalButton = document.querySelector('.second');
const thirdModalButton = document.querySelector('.third');
const modalContainer = document.querySelector('.modal');
const cancelButton = document.querySelector('.cancel');
const yesButton = document.querySelector('.yes-button');
const content = document.querySelector('.content');
const closeButton = document.querySelector('.icon');

// Function to show the modal and apply blur
function showModal() {
    modalContainer.classList.remove('hidden'); // Show the modal
    content.classList.add('blur'); // Apply blur effect to the background content
}

// Function to close the modal and remove blur
function closeModal() {
    modalContainer.classList.add('hidden'); // Hide the modal
    content.classList.remove('blur'); // Remove blur effect from the background content
}

// Event listeners for opening the modal
firstModalButton.addEventListener('click', showModal);
secondModalButton.addEventListener('click', showModal);
thirdModalButton.addEventListener('click', showModal);

// Event listeners for closing the modal
closeButton.addEventListener('click', closeModal);
yesButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);
