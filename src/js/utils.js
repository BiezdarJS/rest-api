import { handleEditBtn } from './edit.js';
import { handleDeleteBtn } from './delete.js';


export function getTheId(target) {
  const userId = target.dataset.id;
  return userId;
}



export function createEditBtn(user) {
  const newEditBtn = document.createElement('button');
  newEditBtn.classList.add('edit-btn');
  newEditBtn.innerHTML = 'Edytuj';
  newEditBtn.setAttribute('data-id', user.id);
  newEditBtn.addEventListener('click', handleEditBtn)
  return newEditBtn;
}


export function createDeleteBtn(user) {
  const newDeleteBtn = document.createElement('button');
  newDeleteBtn.classList.add('delete-btn');
  newDeleteBtn.innerHTML = 'Usuń';
  newDeleteBtn.setAttribute('data-id', user.id);
  newDeleteBtn.addEventListener('click', handleDeleteBtn)
  return newDeleteBtn;
}