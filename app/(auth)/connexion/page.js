"use client";

import { Button } from "@/components/ui/button";
import dinosaure from "@/public/assets/images/dinosaure.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image.js";
import { useState } from "react";
import { create } from "../../action.js";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Obligatoire",
    })
    .email({
      message: "Email invalide",
    })
    .trim(),
  password: z
    .string()
    .min(1, {
      message: "Obligatoire",
    })
    .trim(),
});

export default function Login() {
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("https://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const token = await response.json();
        await create(token.token);
        router.replace("/me");
      }

      const errorData = await response.json();
      setErrors(errorData.message);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="mt-16 lg:mt-28 md:container">
      <div className="lg:flex lg:items-center lg:bg-white lg:shadow-md lg:w-[90%] xl:w-[70%] lg:mx-auto lg:rounded-lg">
        <div className="bg-white rounded-lg shadow-md lg:shadow-none p-4 lg:flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe@gmail.com"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Mot de passe *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Votre mot de passe"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>* Champs Obligatoire</FormDescription>
              <FormDescription className="text-red-500">
                {errors}
              </FormDescription>
              <Button variant="default" type="submit">
                Se connecter
              </Button>
            </form>
          </Form>
        </div>
        <div className="lg:flex-1 lg:h-[500px]">
          <Image
            src={dinosaure}
            className="hidden lg:block lg:h-full lg:object-cover"
            alt="Création dinosaure"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
}
