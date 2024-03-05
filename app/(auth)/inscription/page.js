"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import woman from "@/public/assets/images/woman.svg";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation.js";
import { create } from "../../action.js";

const formSchema = z
  .object({
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
      .min(12, {
        message: "Mot de passe incorect",
      })
      .trim(),
    confirmPassword: z
      .string()
      .min(1, {
        message: "Confirmation du mot de passe obligatoire",
      })
      .trim(),
    firstname: z
      .string()
      .min(1, {
        message: "Obligatoire",
      })
      .max(255, {
        message: "Limites atteintes",
      })
      .trim(),
    lastname: z
      .string()
      .min(1, {
        message: "Obligatoire",
      })
      .max(255, {
        message: "Limites atteintes",
      })
      .trim(),
    terms: z.literal(true, {
      errorMap: () => ({
        message: "Vous devez accepter les conditions d'utilisation",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Le mot de passe ne correspond pas",
  });

export default function Signin() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      terms: false,
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("https://127.0.0.1:8000/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          firstname: data.firstname,
          lastname: data.lastname,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      if (response.ok) {
        const token = await response.json();
        await create(token.token);
        router.replace("/me");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section className="mt-16 lg:mt-28 w-full">
      <div className="lg:flex lg:items-center lg:gap-8">
        <div className="bg-white rounded-lg shadow-md p-4 lg:w-full lg:flex-1">
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
              <div className="flex flex-col gap-8">
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Confirmer votre mot de passe *</FormLabel>
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
              </div>

              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Prénom *</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Nom de famille *</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <div className="flex flex-row gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          J&apos;accepte les conditions générales
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>* Champs Obligatoire</FormDescription>
              <Button variant="default" type="submit">
                S&apos;inscrire
              </Button>
            </form>
          </Form>
        </div>
        <div className="lg:w-2/4">
          <Image
            src={woman}
            className="hidden lg:block lg:h-full lg:object-cover"
            alt="Création dinosaure"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
}
