"use server";

import { Resend } from "resend";
import {
  TOP_LEVEL,
  PROJECT_TYPES,
  TIMELINES,
  HELP_TYPES,
  INFO_TYPES,
  MEETING_TYPES,
  labelOf,
  type TopLevelId,
} from "@/lib/contact-options";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
};

const FROM = process.env.RESEND_FROM_EMAIL ?? "HA <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? "info@hacompany.com.mx";

function get(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honey = get(formData, "company");
  if (honey) return { status: "ok" };

  const name = get(formData, "name");
  const email = get(formData, "email");
  const reason = get(formData, "reason") as TopLevelId;
  const message = get(formData, "message");

  if (!name || name.length < 2) {
    return { status: "error", message: "Necesitamos tu nombre." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Email inválido." };
  }

  const reasonLabel = labelOf(TOP_LEVEL, reason);
  if (!reasonLabel) {
    return { status: "error", message: "Selecciona el motivo de contacto." };
  }

  const detailLines: string[] = [];
  let subjectTag = reasonLabel;

  if (reason === "project") {
    const projectType = get(formData, "projectType");
    const timeline = get(formData, "timeline");
    const projectTypeLabel = labelOf(PROJECT_TYPES, projectType);
    const timelineLabel = labelOf(TIMELINES, timeline);
    if (!projectTypeLabel) {
      return { status: "error", message: "Selecciona el tipo de proyecto." };
    }
    if (!timelineLabel) {
      return { status: "error", message: "Selecciona el plazo." };
    }
    detailLines.push(`Tipo: ${projectTypeLabel}`);
    detailLines.push(`Plazo: ${timelineLabel}`);
    subjectTag = `Proyecto · ${projectTypeLabel} · ${timelineLabel}`;
  } else if (reason === "existing") {
    const siteRef = get(formData, "siteRef");
    const helpType = get(formData, "helpType");
    const helpTypeLabel = labelOf(HELP_TYPES, helpType);
    if (!siteRef || siteRef.length < 3) {
      return {
        status: "error",
        message: "Cuéntanos cuál es el sitio (URL o descripción).",
      };
    }
    if (!helpTypeLabel) {
      return { status: "error", message: "Selecciona qué tipo de ayuda necesitas." };
    }
    detailLines.push(`Sitio: ${siteRef}`);
    detailLines.push(`Ayuda: ${helpTypeLabel}`);
    subjectTag = `Mantenimiento · ${helpTypeLabel}`;
  } else if (reason === "info") {
    const infoType = get(formData, "infoType");
    const infoTypeLabel = labelOf(INFO_TYPES, infoType);
    if (!infoTypeLabel) {
      return { status: "error", message: "Selecciona qué información buscas." };
    }
    detailLines.push(`Info: ${infoTypeLabel}`);
    subjectTag = `Info · ${infoTypeLabel}`;
  } else if (reason === "meeting") {
    const meetingType = get(formData, "meetingType");
    const meetingTypeLabel = labelOf(MEETING_TYPES, meetingType);
    if (!meetingTypeLabel) {
      return { status: "error", message: "Selecciona el tipo de reunión." };
    }
    detailLines.push(`Reunión: ${meetingTypeLabel}`);
    subjectTag = `Llamada · ${meetingTypeLabel}`;
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "El correo aún no está configurado. Escríbenos a " + TO,
    };
  }

  const body = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Motivo: ${reasonLabel}`,
    ...detailLines,
    message ? `\nMensaje:\n${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `${subjectTag} · ${name}`,
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "No pudimos enviarlo. Intenta de nuevo en un momento.",
      };
    }

    return {
      status: "ok",
      message: "¡Mensaje enviado! Te respondemos en menos de 24 horas.",
    };
  } catch (err) {
    console.error("sendContact threw:", err);
    return {
      status: "error",
      message: "Algo falló. Intenta de nuevo o escríbenos a " + TO,
    };
  }
}
