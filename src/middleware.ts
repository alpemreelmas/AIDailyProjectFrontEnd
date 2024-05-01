import { auth } from "@/auth"
import {authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoute} from "@/routes";
export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isPublicRoute = publicRoute.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return;
    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/login",nextUrl))
    }
    return;
})
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}