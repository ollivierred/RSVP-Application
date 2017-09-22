document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('registrar');  //Access and stores the form reference.
  const input = form.querySelector('input');  //Access and stores input element reference in form.
  const mainDiv = document.querySelector('div.main');
  const ul = document.getElementById('invitedList');  //Access and stores 'ul' reference.
  const div = document.createElement('div');


  const filterLabel = document.createElement('label');
  const filterCheckbox = document.createElement('input');
  filterCheckbox.type = 'checkbox';
  filterLabel.textContent = "Hide those who haven't responded";
  filterLabel.appendChild(filterCheckbox);
  div.appendChild(filterLabel);
  mainDiv.insertBefore(div, ul);

  filterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if (isChecked) {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.className === 'responded') {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      }
    } else {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        li.style.display = '';
      }
    }
  })

  function createLi(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLi(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = document.createElement('li');  //Create list item element
    appendToLi('span', 'textContent', text);
    //create label for checkbox element
    //Appends the checkbox to label
    appendToLi('label', 'textContent', 'confirmed')
      .appendChild(createElement('input', 'type', 'checkbox'));
    appendToLi('button', 'textContent', 'edit');
    appendToLi('button', 'textContent', 'remove');
    return li;
  }

  form.addEventListener('submit', (e) => {  //Adds an event listener to the form's submit event.
    e.preventDefault();  //Cancels the browser's default submit behavior.
    //Create list item to hold the name
    //append list item to the 'ul'
    const text = input.value;  //Stores the input value
    input.value = null;  //Sets form input to an empty string
    const li = createLi(text);
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

  ul.addEventListener('click', (e) => {  //Handles the edit, save, and remove button behaviors
    if(e.target.tagName === 'BUTTON') {  //If object clicked has tagName of 'BUTTON', if statement executes
      const button = e.target;  //Saves object reference
      const li = button.parentNode;  //Saves parent of the button -> li
      const ul = li.parentNode;  //Saves parent of the li -> ul
      const action = button.textContent; //Captures the text content of button -> remove, edit, or save

      const nameActions = {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: () => {
          const input = li.firstElementChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'edit';
        }
      };
      //Selects and runs action based on button's name
      nameActions[action]();
    }
  });
});
