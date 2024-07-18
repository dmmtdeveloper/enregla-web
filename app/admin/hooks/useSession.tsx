import { useState } from "react";
import { Session } from "../types/session";
import { defaultUser } from "../constants/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginUser } from "../api/users";
import useSessionStore from "../store/session";

export default function useSession() {
  const router = useRouter();
  const { setToken, setUser } = useSessionStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [session, setSession] = useState<Session>({
    token: "",
    user: defaultUser,
  });

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  const handleForm = (field: string, value: string) => {
    setform({ ...form, [field]: value });
  };

  const loginUser = async () => {
    const { email, password } = form;
    setLoading(true);
    if (!email || !password) {
      notifyError("Los campos son obligatorios");
      setLoading(false);
      return;
    }

    const response = await LoginUser({ email, password });
    if (response.error) {
      notifyError(response.error);
      setLoading(false);
      return;
    }
    notifyMessage("Iniciando sesión");
    setToken(response.token);
    setUser(response.user);
    setLoading(false);
    router.replace("/admin/dashboard");
  };

  const logoutUser = async () => {
    setSession({ token: "", user: defaultUser });
    setToken("");
    setUser(defaultUser);
    router.replace("/admin/login");
  };

  return { session, form, handleForm, loginUser, logoutUser, loading };
}
