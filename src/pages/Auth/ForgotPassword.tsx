import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PageTitle from "@/components/Auth/PageTitle";

const formSchema = z.object({
  email: z.string(),
});

const ForgotPassword: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
        <PageTitle title="Forgot Password" backLink="/auth/login" />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-auth-foreground">
                Email address
              </FormLabel>
              <div className="relative">
                <input {...field} type="text" className="auth-input" placeholder="Enter your registered email" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          className="w-full cursor-pointer"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPassword;
