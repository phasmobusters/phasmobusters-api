import { Request, Response } from "express";
import getClient from "../../db/client";
import { loginSchema, signUpSchema } from "./schemas";

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await signUpSchema.validateAsync({ email, password });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }

  try {
    const { data, error } = await getClient().auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json({ data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await loginSchema.validateAsync({ email, password });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }

  try {
    const { data, error } = await getClient().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json({ data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
