"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Heart,
  Home,
  Info,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { logout } from "../action";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <Home className="h-5 w-5" />
                Inicio
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <User className="h-5 w-5" />
                Información Personal
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <BookOpen className="h-5 w-5" />
                Aulas Virtuales
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <FileText className="h-5 w-5" />
                Tira de Materias
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                Plan de Estudios
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <Heart className="h-5 w-5" />
                Ficha Médica
              </Link>
            </nav>
            <div className="mt-auto">
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SIIPI</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          {!isMobile && <ModeToggle />}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
          <Avatar>
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Avatar"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-primary"
              >
                <Home className="h-5 w-5" />
                Inicio
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <User className="h-5 w-5" />
                Información Personal
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <BookOpen className="h-5 w-5" />
                Aulas Virtuales
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <FileText className="h-5 w-5" />
                Tira de Materias
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <GraduationCap className="h-5 w-5" />
                Plan de Estudios
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <Heart className="h-5 w-5" />
                Ficha Médica
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
              >
                <Info className="h-5 w-5" />
                Manuales y Ayuda
              </Link>
            </nav>
            <div className="mt-auto">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Axel</p>
                    <p className="text-xs text-muted-foreground">2193012307</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
