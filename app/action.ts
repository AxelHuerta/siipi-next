"use server";

import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function getStudent() {
  const cookieStore = await cookies();
  const cookiesList = cookieStore.getAll();

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
