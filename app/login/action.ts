"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  console.log("Login action triggered");
  console.log("Form data:", formData);
  console.log("Type of formData:", typeof formData);

  const { username, password } = Object.fromEntries(formData.entries());

  const data = {
    username: username,
    password: password,
  };

  const response = await axios
    .post("http://localhost:3000/api/login", JSON.stringify(data))
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error in login action:", err);
      return null;
    });

  const cookiesResponse = response.cookies;

  console.log("Response action:", response);
  console.log("Cookies aciton:", cookiesResponse);

  const cookie1 = cookiesResponse[0];
  const cookieElements1 = cookie1.split(";");

  const cookie2 = cookiesResponse[1];
  const cookieElements2 = cookie2.split(";");

  const name1 = cookieElements1[0].split("=")[0];
  const value1 = cookieElements1[0].split("=")[1];
  const expires1 = cookieElements1[1].split("=")[1];

  const name2 = cookieElements2[0].split("=")[0];
  const value2 = cookieElements2[0].split("=")[1];
  const expires2 = cookieElements2[1].split("=")[1];

  const cookieStore = await cookies();

  console.log("Cookie expires1:", typeof expires1);

  cookieStore.set(name1, value1, { expires: new Date(expires1), secure: true });
  cookieStore.set(name2, value2, { expires: new Date(expires2), secure: true });

  redirect("/");
}
