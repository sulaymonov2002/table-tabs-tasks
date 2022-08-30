import { object, number, string, array } from "yup";

export const Schema = {
  email: string().email().min(3).max(45).required(),
  password: string().min(4).max(45).required(),
};
