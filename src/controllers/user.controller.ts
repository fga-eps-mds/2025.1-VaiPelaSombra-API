import { Request, Response } from 'express';
import * as UserModel from '../models/user.model';

export const getUsers = (req: Request, res: Response) => {
  res.json(UserModel.getAll());
};

export const getUser = (req: Request, res: Response) => {
  const user = UserModel.getById(Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Name and email required' });
  const user = UserModel.create({ name, email });
  res.status(201).json(user);
};

export const updateUser = (req: Request, res: Response) => {
  const updated = UserModel.update(Number(req.params.id), req.body);
  updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
};

export const deleteUser = (req: Request, res: Response) => {
  const deleted = UserModel.remove(Number(req.params.id));
  deleted ? res.json(deleted) : res.status(404).json({ message: 'User not found' });
};
