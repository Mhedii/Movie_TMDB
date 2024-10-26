import { NextResponse } from "next/server";

export function middleware(req: { cookies: { get: (arg0: string) => any } }) {
  const cookie = req.cookies.get("isDarkMode");
  const isDarkMode = cookie === "true";

  const response = NextResponse.next();
  response.cookies.set("isDarkMode", String(isDarkMode));

  return response;
}
