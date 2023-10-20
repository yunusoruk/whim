import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
})

export const userLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password should contain minimum 8 characters."),  // Example validation
})

export const userRegisterSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8, "Password should contain minimum 8 characters."),  // Example validation
});