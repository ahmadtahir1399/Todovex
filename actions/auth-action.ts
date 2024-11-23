"use server";

import { signIn } from "@/auth";

export async function signInAction(params: any) {
  await signIn("google", { redirectTo: "/dashboard" });
}
