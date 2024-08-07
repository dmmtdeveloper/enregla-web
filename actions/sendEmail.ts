"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  console.log("Running on Server");
  console.log(FormData.get("senderEmail"));
  console.log(FormData.get("senderName"));
  console.log(FormData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dmmtapia.ux@gmail.com",
    subject: "Message from contact form",
    text: "Hello world",
  });
};
