"use client";
import useSession from "./hooks/useSession";
import { Spinner } from "@nextui-org/spinner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const { token } = useSession();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        router.push("/admin/login");
      }, 2000);
    } else {
      router.push("/admin/dashboard");
    }
  }, [token]);

  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center bg-white">
        <Spinner size="lg" />
      </main>
    </>
  );
}
