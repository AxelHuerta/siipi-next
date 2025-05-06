"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function getStudent() {
  const cookieStore = await cookies();
  const cookiesList = cookieStore.getAll();

  const response = await axios
    .get("http://localhost:3000/api/student", {
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

  console.log("Student data from action:", response);

  return response;
}
