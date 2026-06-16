import { siteConfig } from "@/lib/constants";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  serviceLevel?: string;
  message?: string;
  companyWebsite?: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Basic honeypot spam check. Bots often fill hidden fields.
    if ((body.companyWebsite ?? "").trim().length > 0) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const serviceLevel = (body.serviceLevel ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!firstName || !lastName || !email) {
      return Response.json(
        { error: "Missing required contact fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Invalid email format." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "no-reply@cruxacct.com";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

    const html = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
      <p><strong>Service level:</strong> ${escapeHtml(serviceLevel || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "No message provided").replaceAll("\n", "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Contact Request from ${firstName} ${lastName}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      return Response.json(
        { error: "Email delivery failed." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
