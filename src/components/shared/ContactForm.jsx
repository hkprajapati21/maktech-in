import { submitContactForm } from "@/utils/submitContactForm";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ContactForm = ({
  subject = "New enquiry from The Mechtech Solutions website",
  submitLabel = "Send A Message",
  showArrow = false,
  formClassName = "",
}) => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("full-name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !phone || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm({ name, email, phone, message, subject });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      <form className={formClassName} onSubmit={handleSubmit} noValidate>
        <input name="full-name" placeholder="Your Name" type="text" required disabled={status === "loading"} />
        <input name="email" placeholder="Email Address" type="email" required disabled={status === "loading"} />
        <input name="phone" placeholder="Your Phone" type="tel" required disabled={status === "loading"} />
        <textarea
          placeholder="Your Message"
          id="message"
          rows="5"
          name="message"
          required
          disabled={status === "loading"}
        ></textarea>
        <button type="submit" className="srex-btn srex-btn--secondary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : submitLabel}
          {showArrow && status !== "loading" && <i className="fa-solid fa-arrow-right"></i>}
        </button>
      </form>

      {status === "success" && (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          Thank you! Your message has been sent. We will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="contact-form__feedback contact-form__feedback--error" role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default ContactForm;
