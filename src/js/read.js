import { users$ } from './collection.js';
import { createEditBtn, createDeleteBtn } from './utils.js';

users$.then(users => {
  printUsers(users);
});




function printUsers(users) {

 users.forEach(user => {
    const usersList = document.querySelector('.users-list');
    // list item
    const newListItem = document.createElement('li');
    newListItem.classList.add('users-item');
    newListItem.innerHTML = user.name;
    // edit Btn
    const editBtn = createEditBtn(user);
    newListItem.appendChild(editBtn);
    // delete Btn
    const deleteBtn = createDeleteBtn(user);
    newListItem.appendChild(deleteBtn);
    
    usersList.appendChild(newListItem);
    
 });
 
} 