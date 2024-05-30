// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Importa next/navigation para Componentes del Servidor

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Código que utiliza useEffect
    // Ejemplo: redirigir a la ruta /order/hamburguesa
    router.push("/order/hamburguesa");
  }, [router]);

  return <h1>Hola mundo</h1>;
}
