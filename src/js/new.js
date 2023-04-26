import { USERS_URL } from './base.js';


const form = document.querySelector('.new-user-form');


function createNewUser() {

  const userName = form.elements.name.value;
  const userDescription = form.elements.description.value;


  let newUser = {
    name: userName,
    description: userDescription
  }

  fetch(
    USERS_URL, 
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    },
    
    )
    .then(response => response.json())
    .then(users => console.log(users));
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewUser();
});