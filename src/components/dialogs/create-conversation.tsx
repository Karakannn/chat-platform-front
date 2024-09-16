import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CreateConversationFormValues, createConversationSchema } from "@/validations/create-conversation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Separator } from "../ui/separator";

export default function CreateConversationDialog() {
  const form = useForm<CreateConversationFormValues>({
    resolver: zodResolver(createConversationSchema),
  });

  const onSubmit = (values: CreateConversationFormValues) => {
    console.log(values);
  };

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Create a Conversation</DialogTitle>
      </DialogHeader>

      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="receipent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit">Create Conversation</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
