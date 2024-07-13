import { useState } from "react";
import { Session } from "../types/session";
import { defaultUser } from "../constants/user";

export default function useSession() {
  const [session, setSession] = useState<Session>({
    token: "",
    user: defaultUser,
  });

  return {};
}
