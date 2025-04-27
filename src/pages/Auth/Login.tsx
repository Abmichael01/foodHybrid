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
import { Loader2Icon, LockKeyhole, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  usernameEmail: z.string(),
  password: z.string(),
});

const formFields = [
  {
    name: "usernameEmail",
    label: "Email address or username",
    type: "text",
    icon: <User />,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: <LockKeyhole />,
  },
];

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameEmail: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/partner/portfolio")
    }, 2000);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <PageTitle title="Sign in" subtitle="Partner" backLink="/partner" />
        {formFields.map((formField) => (
          <FormField
            key={formField.name}
            control={form.control}
            name={formField.name as "usernameEmail" | "password"}
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
                  />
                  <div
                    className={cn(
                      "absolute h-full flex items-center right-3 top-0 scale-[0.9]",
                      form.formState.dirtyFields[
                        formField.name as "usernameEmail" | "password"
                      ]
                        ? "text-[#252525]"
                        : "text-[#B1B5B3]"
                    )}
                  >
                    {formField.icon}
                  </div>
                </div>
                <FormMessage />
                <div className="flex justify-end">
                  {formField.name === "password" && (
                    <Link
                      to="/auth/forgot-password"
                      className="float-right text-sm text-[#15221B]"
                    >
                      Forgot Password
                    </Link>
                  )}
                </div>
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          className="w-full cursor-pointer py-[18px]"
        >
          {isLoading && <Loader2Icon className="animate-spin" /> }
          Log in
        </Button>
      </form>
    </Form>
  );
};

export default Login;
