export function buildContactEmail(details) {
  const body = Object.entries(details)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key[0].toUpperCase()}${key.slice(1)}: ${value.trim()}`)
    .join("\n");
  return `mailto:infoadventyz@gmail.com?subject=${encodeURIComponent("Website enquiry — Adventyz")}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppUrl(details) {
  const message = [
    "Hello Adventyz, I'd like to enquire about your services.",
    details.name.trim() && `Name: ${details.name.trim()}`,
    details.email.trim() && `Email: ${details.email.trim()}`,
    details.phone.trim() && `Phone: ${details.phone.trim()}`,
    details.service && `Service: ${details.service}`,
    details.message.trim() && `Project: ${details.message.trim()}`,
  ].filter(Boolean).join("\n");
  return `https://wa.me/918105579097?text=${encodeURIComponent(message)}`;
}
