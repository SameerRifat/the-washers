import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const ContactFormEmail = ({ message, senderEmail, senderName, senderPhone, subject }) => {

  return (
    <Html>
      <Head />
      <Preview>New message from TheWashers site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight font-semibold text-base">
                New message from TheWashers site
              </Heading>
              <Text>
                <h3 className="text-base font-medium"><span className="font-semibold">Subject: </span> {subject}</h3>
              </Text>
              <Text>
                <h3 className="text-base font-medium"><span className="font-semibold">Sender Name: </span> {senderName}</h3>
              </Text>
              <Text>
                <h4 className="text-base font-medium my-2"><span className="font-semibold">Sender Phone: </span> {senderPhone}</h4>
              </Text>
              <Text>
                {/* <h3 className="text-lg font-semibold"><span className="font-bold">Sender Name: </span> {senderName}</h3> */}
                {/* <h4 className="text-lg font-semibold my-2"><span className="font-bold">Sender Phone: </span> {senderPhone}</h4> */}
                <p>
                  <span className="font-bold">Message: </span> {message}
                </p>
              </Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
