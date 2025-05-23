"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.API_URL;

export async function login(formData: FormData) {
  const { username, password } = Object.fromEntries(formData.entries());

  const data = {
    username: username,
    password: password,
  };

  const response = await axios
    .post(`${API_URL}/api/login`, JSON.stringify(data))
    .then(async (res) => {
      const cookiesResponse = res.data.cookies;

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

      cookieStore.set(name1, value1, {
        expires: new Date(expires1),
        secure: true,
      });
      cookieStore.set(name2, value2, {
        expires: new Date(expires2),
        secure: true,
      });

      return res.data;
    })
    .catch((err) => {
      console.error("Error in login action:", err);
      return null;
    });

  if (response) redirect("/");
}
