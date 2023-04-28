import { USERS_URL } from './base.js';
import { getTheId } from './utils.js';

// najpierw pobier rekord na podstawie ID i uzupełnij pola formularza danymi
const editForm = document.querySelector('.edit-form');




// w momencie kliknięcia w przycisk EDYTUJ



export function handleEditBtn(event) {
  // 1. pobieram ID klikniętego przycisku do zmiennej userId
  const userId = getTheId(event.target)
  // 2. z pomocą zmiennej userId buduję URL
  const userToChange = USERS_URL + '/' + userId;
  // 3. Pobieram określony element i wypełniam formularz danymi tego elementu
  fetch(userToChange).then(response => response.json())
  .then(
    user => {
      editForm.elements.id.value = user.id;
      editForm.elements.name.value = user.name;
      editForm.elements.description.value = user.description;
      
    });
}

editForm.addEventListener('submit', (event) => {

  event.preventDefault();

  const userId = editForm.elements.id.value;
  const userToChange = USERS_URL + '/' + userId;
  
  const userName = editForm.elements.name.value;
  const userDescription = editForm.elements.description.value;

  const newUser = {
    name: userName,
    description: userDescription
  }

  fetch(userToChange, 
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    }
    
    )
    .then(response => response.json())
    .then(response => console.log(response));
  
});

