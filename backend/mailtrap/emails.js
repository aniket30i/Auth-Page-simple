import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerficationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  console.log("mail service called");
  console.log("recipient", recipient);
  console.log("sender", sender);

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (err) {
    throw new Error("Error sending verification email", err);
  }
};

export const sendWelcomeEmail = async (email, name) => {};
