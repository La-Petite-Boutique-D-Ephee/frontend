import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/connexion";

  if (!request.cookies.has("token")) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Configurez le matcher pour intercepter toutes les requêtes vers /me
  matcher: "/me",
};
