import { USERS_URL } from './base.js';

export const users$ = fetch(USERS_URL).then(response => response.json());