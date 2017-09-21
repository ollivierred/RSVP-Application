const form = document.getElementById('registrar');  //Access and stores the form reference.
const input = form.querySelector('input');  //Access and stores input element reference in form.
const ul = document.getElementById('invitedList');  //Access and stores 'ul' reference.


form.addEventListener('submit', (e) => {  //Adds an event listener to the form's submit event.
  e.preventDefault();  //Cancels the browser's default submit behavior.

  //Create list item to hold the name
  //append list item to the 'ul'
  const text = input.value;  //Stores the input value
  input.value = '';  //Sets form input to an empty string

  const li = document.createElement('li');  //Create list item element
  const label = document.createElement('label');  //create label for checkbox element
  const checkbox = document.createElement('input');  //create checkbox element.

  li.textContent = text;  //Puts input value into the list item.
  label.textContent = "Confirmed";  //
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);  //Adds the 'li' to the 'ul'


})
