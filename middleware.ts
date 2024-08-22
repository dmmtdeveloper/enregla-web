import { NextResponse } from "next/server";

export function middleware(request: Request) {
  // get the URL from request header
  const requestHeaders = new Headers(request.headers);
  const pathname = request.url.split("/").slice(3).join("/");
  requestHeaders.set("x-pathname", `/${pathname}`);

  // pass the header to the layout
  return NextResponse.next({
    request: {
      ...request,
      headers: requestHeaders,
    },
  });
}