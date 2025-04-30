import { User } from '../types/user';

let users: User[] = [];
let idCounter = 1;

export const getAll = (): User[] => users;

export const getById = (id: number): User | undefined =>
  users.find(user => user.id === id);

export const create = (data: Omit<User, 'id'>): User => {
  const newUser = { id: idCounter++, ...data };
  users.push(newUser);
  return newUser;
};

export const update = (id: number, data: Partial<Omit<User, 'id'>>): User | null => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

export const remove = (id: number): User | null => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};
