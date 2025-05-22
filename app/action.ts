"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import axios from "axios";

const API_URL = process.env.API_URL;

export async function getStudent() {
  const cookieStore = await cookies();
  const cookiesList = cookieStore.getAll();

  const phpsessid = cookieStore.get("PHPSESSID");
  const rememberMe = cookieStore.get("REMEMBERME");

  if (!phpsessid || !rememberMe) {
    console.log("No session or remember me cookie found");
    return null;
  }

  const response = await axios
    .get(`${API_URL}/api/student`, {
      headers: {
        cookie: cookiesList
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join("; "),
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching student data:", err);
      return null;
    });

  return response;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("PHPSESSID");
  cookieStore.delete("REMEMBERME");

  redirect("/login");
}
