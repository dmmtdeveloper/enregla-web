import { useState } from "react";
import { Session } from "../types/session";
import { defaultUser } from "../constants/user";
import { useRouter } from "next/navigation";

export default function useSession() {
  const router = useRouter();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [session, setSession] = useState<Session>({
    token: "",
    user: defaultUser,
  });

  const handleForm = (field: string, value: string) => {
    setform({ ...form, [field]: value });
  };

  const loginUser = async () => {
    setTimeout(() => {
      router.replace("/admin/dashboard");
    }, 2000);
  };

  const logoutUser = async () => {
    setSession({ token: "", user: defaultUser });
    router.replace("/admin/login");
  };

  return { session, form, handleForm, loginUser, logoutUser };
}
