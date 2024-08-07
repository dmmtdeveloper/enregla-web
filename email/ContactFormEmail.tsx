import * as React from "react";
import { Body, Container, Head, Heading, Html, Img, Link, Section, Text, Preview, Hr } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export const ContactFormEmail = ({ message, senderEmail, senderName }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje desde www.enregla.cl</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading className="text-slate-900 text-inherit">Mensaje desde WebSite enregla</Heading>
              <Text className="font-semibold text-[20px]">{senderName}</Text>
              <Text className="small">{message}</Text>
              <Hr />
              <Text className="text-slate-900">El Correo electrónico del remitente es: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
