import { z } from "zod/v4";

const LoginSchema = z.object({
    username: z.string().nonempty("Username is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .refine((value) => value !== "", {
            message: "Password is required",
        }),
});

export { LoginSchema }