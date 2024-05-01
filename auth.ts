import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import axiosInstance from "@/src/lib/axiosInstance";

export const { handlers: {GET, POST}, auth,signIn } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                    /*let response = await axiosInstance.post("/auth/login",credentials);*/
                    let response = await fetch(`${process.env.API_URL}/auth/login`,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials)
                    })
                    const user = await response.json();

                    if (!response.ok) {
                        return null
                    }
                    return user.data
            },
        }),
    ],
    session: {strategy: "jwt"},
    pages:{
        signIn: "/login"
    }
})