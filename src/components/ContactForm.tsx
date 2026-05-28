"use client";

import { AnimatePresence, motion } from "motion/react";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/lib/actions/contact";
import {
  TOP_LEVEL,
  PROJECT_TYPES,
  TIMELINES,
  HELP_TYPES,
  INFO_TYPES,
  MEETING_TYPES,
  type TopLevelId,
} from "@/lib/contact-options";

const initialState: ContactState = { status: "idle" };

type OptionGroupProps = {
  name: string;
  options: readonly { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
};

function OptionGroup({
  name,
  options,
  value,
  onChange,
  required,
}: OptionGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((o) => {
        const selected = value === o.id;
        return (
          <label
            key={o.id}
            className="flex items-center gap-3 cursor-pointer transition-colors"
            style={{
              padding: "13px 16px",
              borderRadius: 14,
              border: `1px solid ${
                selected ? "var(--orange)" : "rgba(255,245,238,0.12)"
              }`,
              background: selected
                ? "rgba(255,77,28,0.12)"
                : "rgba(255,245,238,0.05)",
            }}
          >
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={selected}
              onChange={() => onChange(o.id)}
              className="sr-only"
              required={required}
            />
            <span
              className="size-4 rounded-full shrink-0 flex items-center justify-center"
              style={{
                border: `2px solid ${
                  selected ? "var(--orange)" : "rgba(255,245,238,0.4)"
                }`,
              }}
              aria-hidden
            >
              {selected && (
                <span
                  className="size-2 rounded-full"
                  style={{ background: "var(--orange)" }}
                />
              )}
            </span>
            <span style={{ fontSize: 14.5, color: "var(--paper)" }}>
              {o.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,245,238,0.06)",
  color: "var(--paper)",
  border: "1px solid rgba(255,245,238,0.12)",
  borderRadius: 14,
  padding: "14px 16px",
  fontSize: 15,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.2em",
  color: "var(--orange)",
  marginBottom: 10,
  display: "block",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex items-center justify-between gap-4 px-7 py-4 rounded-full transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-wait"
      style={{
        background: "var(--orange)",
        color: "var(--ink)",
        fontWeight: 700,
        fontSize: 15,
      }}
    >
      <span className="inline-flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-ink" />
        {pending ? "Enviando..." : "Enviar"}
      </span>
      <span className="text-xl group-hover:translate-x-1 transition-transform">
        →
      </span>
    </button>
  );
}

const fadeSlide = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.2 },
};

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState);
  const [reason, setReason] = useState<TopLevelId | "">("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [helpType, setHelpType] = useState("");
  const [infoType, setInfoType] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "ok") {
      formRef.current?.reset();
      setReason("");
      setProjectType("");
      setTimeline("");
      setHelpType("");
      setInfoType("");
      setMeetingType("");
      setShowSuccess(true);
    }
  }, [state.status]);

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 4500);
    return () => clearTimeout(t);
  }, [showSuccess]);

  const showRest = reason !== "";

  return (
    <>
    <form ref={formRef} action={formAction} className="flex flex-col gap-8">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        style={{ position: "absolute", left: -9999, opacity: 0 }}
      />

      <div>
        <span className="font-mono uppercase" style={labelStyle}>
          01 · ¿Para qué nos contactas?
        </span>
        <OptionGroup
          name="reason"
          options={TOP_LEVEL}
          value={reason}
          onChange={(v) => setReason(v as TopLevelId)}
          required
        />
      </div>

      <AnimatePresence mode="wait">
        {reason === "project" && (
          <motion.div key="project" {...fadeSlide} className="flex flex-col gap-8">
            <div>
              <span className="font-mono uppercase" style={labelStyle}>
                02 · ¿Qué tipo de proyecto?
              </span>
              <OptionGroup
                name="projectType"
                options={PROJECT_TYPES}
                value={projectType}
                onChange={setProjectType}
                required
              />
            </div>
            <div>
              <span className="font-mono uppercase" style={labelStyle}>
                03 · ¿Para cuándo lo necesitas?
              </span>
              <OptionGroup
                name="timeline"
                options={TIMELINES}
                value={timeline}
                onChange={setTimeline}
                required
              />
            </div>
          </motion.div>
        )}

        {reason === "existing" && (
          <motion.div
            key="existing"
            {...fadeSlide}
            className="flex flex-col gap-8"
          >
            <div>
              <label
                className="font-mono uppercase"
                style={labelStyle}
                htmlFor="cf-siteRef"
              >
                02 · ¿Cuál es el sitio?
              </label>
              <input
                id="cf-siteRef"
                name="siteRef"
                type="text"
                required
                minLength={3}
                placeholder="URL o descripción"
                style={fieldStyle}
              />
            </div>
            <div>
              <span className="font-mono uppercase" style={labelStyle}>
                03 · ¿Qué necesitas?
              </span>
              <OptionGroup
                name="helpType"
                options={HELP_TYPES}
                value={helpType}
                onChange={setHelpType}
                required
              />
            </div>
          </motion.div>
        )}

        {reason === "info" && (
          <motion.div key="info" {...fadeSlide}>
            <span className="font-mono uppercase" style={labelStyle}>
              02 · ¿Qué te gustaría saber?
            </span>
            <OptionGroup
              name="infoType"
              options={INFO_TYPES}
              value={infoType}
              onChange={setInfoType}
              required
            />
          </motion.div>
        )}

        {reason === "meeting" && (
          <motion.div key="meeting" {...fadeSlide}>
            <span className="font-mono uppercase" style={labelStyle}>
              02 · ¿Qué tipo de reunión?
            </span>
            <OptionGroup
              name="meetingType"
              options={MEETING_TYPES}
              value={meetingType}
              onChange={setMeetingType}
              required
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRest && (
          <motion.div
            key="contact-fields"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="font-mono uppercase"
                  style={labelStyle}
                  htmlFor="cf-name"
                >
                  Nombre
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Tu nombre"
                  style={fieldStyle}
                />
              </div>
              <div>
                <label
                  className="font-mono uppercase"
                  style={labelStyle}
                  htmlFor="cf-email"
                >
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label
                className="font-mono uppercase"
                style={labelStyle}
                htmlFor="cf-message"
              >
                ¿Algo más que debamos saber? <span style={{ opacity: 0.5 }}>(opcional)</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                placeholder="Cualquier detalle adicional..."
                style={{ ...fieldStyle, resize: "vertical", fontFamily: "inherit" }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <SubmitButton />
              <AnimatePresence>
                {state.status === "error" && state.message && (
                  <motion.p
                    key="error"
                    role="alert"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] leading-[1.5] m-0"
                    style={{ color: "var(--orange)" }}
                  >
                    {state.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>

    <AnimatePresence>
      {showSuccess && (
        <motion.div
          key="toast"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[200] inline-flex items-center gap-2.5 rounded-full font-semibold"
          style={{
            padding: "12px 20px",
            background: "var(--acid)",
            color: "var(--ink)",
            fontSize: 14,
            letterSpacing: "-0.01em",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Enviado
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
