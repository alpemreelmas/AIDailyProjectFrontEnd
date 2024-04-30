import NextAuth, {AuthError, CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import axiosInstance from "@/src/lib/axiosInstance";

class InvalidLoginError extends CredentialsSignin {
    code = "Invalid identifier or password"
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                    let response = await axiosInstance.post("/auth/login",credentials);

                    if (response.data.is_error) {
                        return { error: 'my custom error' };
                    }

                    return response.data.data
            },
        }),
    ],
})