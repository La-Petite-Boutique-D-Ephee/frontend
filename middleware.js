import { NextResponse } from "next/server.js";
import { userRole } from "./app/constants/role.js";
import { decodedToken } from "./app/utils/jwt.js";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const cookie = request.cookies.get("token");
  const token = cookie?.value;
  const userRoutes = ["/me"];

  const adminRoutes = ["/dashboard"];

  if (token) {
    url.pathname = "/";

    const user = decodedToken(token);

    // if token is expired then redirect to login page
    if (user.exp < Date.now() / 1000) {
      url.pathname = "/connexion";
      return NextResponse.redirect(url);
    }
    // if user role is not admin and user is trying to access admin routes then redirect to login page
    if (user.roles[1] !== userRole.ADMIN && adminRoutes.includes(pathname)) {
      return NextResponse.redirect(url);
    }
    if (user.roles[0] !== userRole.USER && userRoutes.includes(pathname)) {
      return NextResponse.redirect(url);
    }
  } else {
    if (userRoutes.includes(pathname) || adminRoutes.includes(pathname)) {
      url.pathname = "/connexion";
      return NextResponse.redirect(url);
    }
  }
}
