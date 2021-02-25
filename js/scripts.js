// console.log("hello");
// event.preventDeafault prevents submit btn from submitting a form default action...
// as we're not sending to a database...

const msgContent = "";

function msgSent(event) {
  sent.textContent = 'Thank you for messaging!';
  event.preventDefault();
};

const form = document.getElementById('form');
const sent = document.getElementById('sent');

form.addEventListener('submit', msgSent);
