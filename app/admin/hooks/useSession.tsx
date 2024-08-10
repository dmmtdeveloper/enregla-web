import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LoginUser } from "../api/users";
import useSessionStore from "../store/session";
import { User } from "../types/user";

const defaultUserSession: User = {
  id: 0,
  name: "",
  email: "",
  rut: "",
  branch: {
    id: 0,
    address: "",
  },
  role: { id: 0, name: "" },
};

export default function useSession() {
  const router = useRouter();
  const { token, user, setToken, setUser } = useSessionStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setform] = useState({
    rut: "",
    password: "",
  });

  const notifyMessage = (message: string) => toast.success(message);
  const notifyError = (error: string) => toast.error(error);

  const handleForm = (field: string, value: string) => {
    setform({ ...form, [field]: value });
  };

  const loginUser = async () => {
    const { rut, password } = form;
    setLoading(true);
    if (!rut || !password) {
      notifyError("Los campos son obligatorios");
      setLoading(false);
      return;
    }

    const response = await LoginUser({ rut, password });
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
    setToken("");
    setUser(defaultUserSession);
    router.replace("/admin/login");
  };

  return { token, user, form, handleForm, loginUser, logoutUser, loading };
}
