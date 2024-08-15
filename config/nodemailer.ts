"use server";
import nodemailer from "nodemailer";


const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS


export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smpt.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: email,
    pass
  },
});



