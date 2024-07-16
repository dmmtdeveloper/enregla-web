"use client";
import Image from "next/image";
import { textStyles } from "../constants/theme";
import CustomButton from "../ui/button";
import CustomTextInput from "../ui/textinput";
import useSession from "../hooks/useSession";

const brand = require("@/assets/images/brand.png");

export default function Login() {
  const { form, handleForm, loginUser } = useSession();
  return (
    <>
      <main className="w-screen h-screen flex bg-gradient-to-br from-slate-900 to-teal-700">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="h-[20%] flex flex-col items-center">
            <Image src={brand} alt="Enregla" width={300} className="mb-[12px]" />
            <h2 className={textStyles.title}>Administración</h2>
          </div>
          <div className="w-[40%] h-[40%] flex flex-col items-center">
            <CustomTextInput
              value={form.email}
              onChange={(e) => handleForm("email", e.target.value)}
              placeholder="Email"
            />
            <CustomTextInput
              value={form.password}
              type="password"
              onChange={(e) => handleForm("password", e.target.value)}
              placeholder="Contraseña"
            />
            <CustomButton text="Iniciar sesión" style={{ marginTop: "16px" }} onClick={loginUser} />
          </div>
        </div>
      </main>
    </>
  );
}
