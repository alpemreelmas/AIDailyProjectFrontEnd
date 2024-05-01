"use server"
import {signIn} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";

export async function login(email: string, password: string){

    try{
        await signIn("credentials", {
            email: email,
            password: password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch (e) {
        if(e instanceof AuthError){
            switch (e.type){
                case "CredentialsSignin":
                    return { error: "Invalid Credentials"}
                default:
                    return {error: "Something went wrong!"}
            }
        }
        throw e;
    }
}