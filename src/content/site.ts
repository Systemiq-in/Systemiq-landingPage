/**
 * Identity and contact details for Systemiq.
 *
 * Single source of truth — every phone number, email address and description of
 * who Systemiq is should be read from here, never hardcoded into a component.
 *
 * Systemiq is an independent practice run by one engineer. Copy across the site
 * must not imply a team, a headcount, or a delivery history that does not exist.
 * If you later bring people on, change `operatorModel` here and the wording that
 * depends on it, rather than sprinkling "we" and "our team" back through the JSX.
 */

export const site = {
  name: "Systemiq",
  legalName: "Systemiq",
  tagline: "Engineering better business systems.",
  domain: "https://systemiq.in",

  operator: {
    name: "Muhammad Ramzy",
    role: "Software engineer & systems architect",
    /** Solo practice. Specialists are brought in per project when a build needs them. */
    operatorModel: "independent",
  },

  contact: {
    email: "mr.solutions.in@gmail.com",
    /** E.164, for tel: and wa.me links. */
    phoneRaw: "+917592887426",
    /** Human-readable. */
    phoneDisplay: "+91 75928 87426",
    whatsapp: "https://wa.me/917592887426",
    /** TODO(verify): confirm how specific you want to be publicly. */
    location: "Kerala, India",
    availability: "Remote, working with clients across India and the Gulf",
    responseTime: "within one business day",
  },

  /** Only real, live profiles. Never add a placeholder link here. */
  social: {
    instagram: "https://www.instagram.com/systemiq.in/",
  },

  /** Verifiable facts only. Nothing here should require a client's permission to state. */
  facts: [
    { value: "8", label: "Systems already engineered" },
    { value: "Direct", label: "You work with the engineer, not a manager" },
    { value: "2–7 wks", label: "Typical tailoring to launch" },
    { value: "100%", label: "You own the source code" },
  ],
} as const;
