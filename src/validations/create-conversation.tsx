import { z } from "zod";

export const createConversationSchema = z.object({
  receipent: z.string().nonempty(),
  message: z.string().nonempty(),
});

export type CreateConversationFormValues = z.infer<typeof createConversationSchema>;
