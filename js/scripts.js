// event.preventDeafault prevents submit btn from submitting a form default action...
// as we're not sending to a database...
const msgContent = "";

form.addEventListener('submit', (event) => {
    sent.textContent = "thank you for messaging";
    event.preventDefault();
});
