import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const cookiesList = cookieStore.getAll();

  console.log("Cookies from api:", cookieStore.getAll());

  const response = await axios.get("https://siipi.izt.uam.mx/alumno", {
    headers: {
      cookie: cookiesList
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; "),
    },
  });

  const cleanedData = response.data
    .split("INFORMACIÓN DEL ALUMNO PARA EL TRIMESTRE ")[1]
    .split('<table class="table-striped table">')[0]
    .replace(/<\/?[^>]+(>|$)/g, "");

  const trimester = cleanedData.split("ALUMNO")[0].trim();
  const name = cleanedData.split("ALUMNO:")[1].split("ESTADO")[0].trim();
  const status = cleanedData
    .split("ESTADO:")[1]
    .split("TRIMESTRE INGRESO")[0]
    .trim();
  const firstTrimester = cleanedData
    .split("TRIMESTRE INGRESO:")[1]
    .split("MATRÍCULA")[0]
    .trim();
  const studentId = cleanedData
    .split("MATRÍCULA:")[1]
    .split("DEDICACIÓN")[0]
    .trim();
  const dedication = cleanedData
    .split("DEDICACIÓN:")[1]
    .split("ÚLTIMO TRIMESTRE")[0]
    .trim();
  const lastTrimester = cleanedData
    .split("ÚLTIMO TRIMESTRE INSCRITO:")[1]
    .split("DIVISIÓN")[0]
    .trim();
  const division = cleanedData
    .split("DIVISIÓN:")[1]
    .split("CRÉDITOS INSCRITOS")[0]
    .trim();
  const enrolledCredits = cleanedData
    .split("CRÉDITOS INSCRITOS:")[1]
    .split("CRÉDITOS CONTABILIZADOS")[0]
    .trim();
  const totalCredits = cleanedData
    .split("CRÉDITOS CONTABILIZADOS:")[1]
    .split("PLAN")[0]
    .trim();
  const plan = cleanedData
    .split("PLAN:")[1]
    .split("CLAVE DEL PLAN")[0]
    .split("\n")[0]
    .trim();
  const planKey = cleanedData
    .split("CLAVE DEL PLAN:")[1]
    .split("E-MAIL")[0]
    .split("\n")[0]
    .trim();
  const email = cleanedData.split("E-MAIL:")[1].trim();

  return new Response(
    JSON.stringify({
      trimester,
      name,
      status,
      firstTrimester,
      studentId,
      dedication,
      lastTrimester,
      division,
      enrolledCredits,
      totalCredits,
      plan,
      planKey,
      email,
    })
  );
}
