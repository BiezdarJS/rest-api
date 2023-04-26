import { users$ } from './collection.js';


users$.then(users => {
  printUsers(users);
});


function printUsers(users) {

 users.forEach(user => {
    const usersList = document.querySelector('.users-list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('users-item');
    newListItem.innerHTML = user.name;
    usersList.appendChild(newListItem);

 });
 
} 