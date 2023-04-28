import { USERS_URL } from './base.js';
import { getTheId } from './utils.js';


const allDeleteBtns = document.querySelectorAll('.delete-btn');
Array.from(allDeleteBtns).forEach(deleteBtn => {
  deleteBtn.addEventListener('click', handleDeleteBtn);
});


export function handleDeleteBtn(event) {

  // po naciśnięciu przycisku DELETE pobieram ID z tego przycisku
  const userId = getTheId(event.target)

  // na podstawie pobranego ID tworzę url z tym ID
  const deleteUrl = USERS_URL + '/' + userId;

  // wykonuję zapytanie DELETE, które ma usunąć post z bazy db.json
  fetch(deleteUrl,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'appication/json'
      }
    }
    )

}