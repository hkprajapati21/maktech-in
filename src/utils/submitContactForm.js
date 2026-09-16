import { officeEmail } from "@/assets/data/contact";

export const submitContactForm = async ({ name, email, phone, message, subject = "New enquiry from website" }) => {
  const response = await fetch(`https://formsubmit.co/ajax/${officeEmail}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      message,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to send message. Please try again.");
  }

  return data;
};
