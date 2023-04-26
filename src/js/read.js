import { users$ } from './collection.js';


users$.then(users => {
  console.log(users);
});