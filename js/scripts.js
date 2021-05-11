// event.preventDeafault prevents submit btn from submitting a form default action...
// as we're not sending to a database...
// console.log('testing');
// const msgContent = "";

// form.addEventListener('submit', (event) => {
//     sent.textContent = "thank you for messaging";
//     event.preventDefault();
// });

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});
