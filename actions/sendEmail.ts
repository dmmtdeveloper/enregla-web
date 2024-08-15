import { Resend } from "resend";
// import { getErrorMessage, validateString } from "@/lib/utils";
// import { ContactFormEmail } from "@/email/ContactFormEmail";
// import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  // console.log(formData.get("SenderEmail"));
  // console.log(formData.get("SenderName"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dmmtapia.ux@gmail.com",
    subject: "Message from contact form",
    text: "Hola!",
  });
};

// console.log(FormData);
// const senderName = FormData.get("senderName");
// const senderEmail = FormData.get("senderEmail");
// const message = FormData.get("message");

// if (!validateString(senderName, 30)) {
//   return {
//     error: "Nombre invalido",
//   };
// }

// if (!validateString(senderEmail, 500)) {
//   return {
//     error: "Email invalido",
//   };
// }

// if (!validateString(message, 5000)) {
//   return {
//     error: "mensaje invalido",
//   };
// }

// let data;
// try {
//   data = await resend.emails.send({
//     from: "Formulario de contacto <onboarding@resend.dev>",
//     to: ["dmmtapia.ux@gmail.com"],
//     subject: "Mensaje desde formulario de contacto enregla",
//     reply_to: senderEmail as string,
//     react: React.createElement(ContactFormEmail, {
//       message: message as string,
//       senderEmail: senderEmail as string,
//       senderName: senderName as string,
//     }),
//   });

//   console.log(data);
// } catch (error: unknown) {
//   return {
//     error: getErrorMessage(error),
//   };
// }
// return {
//   data,
// };
