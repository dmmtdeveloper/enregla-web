"use client";

import React, { useRef } from "react";
import { toast } from "react-toastify";

export function useForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const APIKEY = process.env.API_KEY as string;

    formData.append("access_key", APIKEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        toast.success("Mensaje enviado");
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return { formRef, handleSubmit };
}
