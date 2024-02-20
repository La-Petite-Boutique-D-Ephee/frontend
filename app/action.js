"use server";
import { cookies } from "next/headers";

export async function create(data) {
  cookies().set("token", data, {
    httpOnly: true,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60,
  });
}
export async function getToken() {
  const token = cookies().get("token");
  return token.value;
}
export async function deleteToken() {
  cookies().delete("token");
}
