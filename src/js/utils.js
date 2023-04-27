import { handleEditBtn } from './edit.js';



export function createEditBtn(user) {
  const newEditBtn = document.createElement('button');
  newEditBtn.classList.add('edit-btn');
  newEditBtn.innerHTML = 'Edytuj';
  newEditBtn.setAttribute('data-id', user.id);
  newEditBtn.addEventListener('click', handleEditBtn)
  return newEditBtn;
}