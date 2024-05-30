import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la ruta deseada, por ejemplo, '/otra-ruta'
    router.push("/order/cafe");
  }, [router]);

  return <h1>Hola mundo</h1>;
}
