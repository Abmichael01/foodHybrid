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
import { LockKeyhole, User } from "lucide-react";

const formSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

const formFields = [
  {
    name: "email",
    label: "Email address",
    placeholder: "e.g Johndoe12@gmail.com",
    type: "text",
    icon: <User />,
  },
  {
    name: "username",
    label: "Partner username",
    placeholder: "e.g Johndoe12@gmail.com",
    type: "text",
    icon: <User />,
  },
  {
    name: "password",
    label: "Create Password",
    type: "password",
    placeholder: "Minimum of 6 characters",
    icon: <LockKeyhole />,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Minimum of 6 characters",
    icon: <LockKeyhole />,
  },
];

const Register: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: ""
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full pt-[2%]">
        <PageTitle title="Create an account" subtitle="Partner" backLink="/auth" />
        {formFields.map((formField) => (
          <FormField
            key={formField.name}
            control={form.control}
            name={formField.name as "username" | "password" | "email" | "confirmPassword"}
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-auth-foreground">
                  {formField.label}
                </FormLabel>
                <div className="relative">
                  <input
                    {...field}
                    type={formField.type}
                    className="auth-input"
                    placeholder={formField.placeholder}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={!form.formState.isDirty} className="w-full cursor-pointer py-[18px]">
          Log in
        </Button>
        <p className="italic text-[#636C67]">
        <span className="font-semibold">Partner:</span> Join as a Partner (Distributor) to access exclusive partner shops, purchase product packages, and earn monthly profit shares through our distribution program. Perfect for business-oriented users.
        </p>
      </form>
    </Form>
  );
};

export default Register;
