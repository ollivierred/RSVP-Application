const form = document.getElementById('registrar');  //Access and stores the form reference.
const input = form.querySelector('input');  //Access and stores input element reference in form.

form.addEventListener('submit', (e) => {  //Adds an event listener to the form's submit event.
  e.preventDefault();  //Cancels the browser's default submit behavior.

  //Create list item to hold the name
  //append list item to the 'ul'
  const text = input.value;  //Stores the input value
  input.value = '';  //Sets form input to an empty string
  const ul = document.getElementById('invitedList');  //Access and stores 'ul' reference.
  const li = document.createElement('li');  //Create list item element
  li.textContent = text;  //Puts input value into the list item.
  ul.appendChild(li);  //Adds the 'li' to the 'ul'


})
