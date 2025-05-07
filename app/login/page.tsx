"use client";

import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "./action";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <GraduationCap className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold">SIIPI - NEXT</h1>
          <p className="text-muted-foreground">
            Esta plataforma replica el SIIPI de la UAM-I, conectándose al
            servidor oficial. No almacena datos personales ni modifica el
            sistema real.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
            <CardDescription>
              Ingresa tus credenciales para acceder a la plataforma
            </CardDescription>
          </CardHeader>

          <form action={login} className="space-y-4">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Matrícula</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Ej. 2191234567"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" type="submit">
                Ingresar
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
