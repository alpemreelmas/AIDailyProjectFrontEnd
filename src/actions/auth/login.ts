"use server"

import {signIn} from "@/auth";

export async function login(email: string, password: string){
    const res = await signIn("credentials", {redirect: true, email: email, password: password})
    console.log("RESPONSE: ", res)
}