const form = document.getElementById('registrar');  //Access and stores the form reference.
const input = form.querySelector('input');  //Access and stores input element reference in form.
const ul = document.getElementById('invitedList');  //Access and stores 'ul' reference.


form.addEventListener('submit', (e) => {  //Adds an event listener to the form's submit event.
  e.preventDefault();  //Cancels the browser's default submit behavior.

  //Create list item to hold the name
  //append list item to the 'ul'
  const text = input.value;  //Stores the input value
  input.value = null;  //Sets form input to an empty string

  const li = document.createElement('li');  //Create list item element
  li.textContent = text;  //Puts input value into the list item.

  const label = document.createElement('label');  //create label for checkbox element
  label.textContent = 'Confirmed';  //Adds the text of 'confirmed to the label attribute'

  const checkbox = document.createElement('input');  //create checkbox element.
  checkbox.type = 'checkbox';  //Set checkbox attribute type to 'checkbox'

  const button = document.createElement('button')
  button.textContent = 'Remove';

  label.appendChild(checkbox);  //Appends the checkbox to label
  li.appendChild(label);    //Appends the label to the 'li'
  li.appendChild(button);
  ul.appendChild(li);  //Adds the 'li' to the 'ul'
});

ul.addEventListener('change', (e) => {  //Listens for checkbox whether checked or unchecked
  const checkbox = e.target;  //Stores the checkbox reference. In this case the value true or false
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;  //checkbox->parentNode = label->parentNode = li. The listItem reference is stored
  if (checked) {  //Adds class of responded if checked is true, removes class if checked is false
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
})
