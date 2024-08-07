"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import { ContactFormEmail } from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderName = FormData.get("senderName");
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  // simple server side validation
  if (!validateString(senderName, 30)) {
    return {
      error: "Nombre invalido",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Email invalido",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "mensaje invalido",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Formulario de contacto <onboarding@resend.dev>",
      to: "dmmtapia.ux@gmail.com",
      subject: "Mensaje desde formulario de contacto enregla",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
