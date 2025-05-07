import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Request received");

  const { username, password } = await request.json();

  const data = new URLSearchParams({
    _username: username,
    _password: password,
    _remember_me: "on",
  });

  const response = await fetch("https://siipi.izt.uam.mx/login_check", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json, text/plain, */*",
    },
    redirect: "manual",
    credentials: "include",
  })
    .then((res) => res)
    .catch((err) => {
      console.error("Error in login action:", err);
      return null;
    });

  if (!response) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }

  const cookies = response.headers.getSetCookie();

  return NextResponse.json({
    cookies: cookies,
  });
}
