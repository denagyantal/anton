import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "noreply@quotecraft.app";

// Lazy client creation to avoid build-time errors when API key is not set
function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

export async function sendPasswordResetEmail(
  to: string,
  resetToken: string
): Promise<void> {
  const client = getResendClient();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const resetUrl = `${appUrl}/reset-password?token=${resetToken}`;

  await client.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Reset your QuoteCraft password",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Reset your password</h2>
        <p>You requested a password reset for your QuoteCraft account.</p>
        <p>Click the button below to reset your password. This link expires in 1 hour.</p>
        <a
          href="${resetUrl}"
          style="
            display: inline-block;
            background: #2563EB;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            margin: 16px 0;
          "
        >
          Reset Password
        </a>
        <p>If you didn't request this, please ignore this email.</p>
        <p style="color: #666; font-size: 14px;">
          Or copy this URL: ${resetUrl}
        </p>
      </div>
    `,
  });
}
