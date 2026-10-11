import { services } from "../data/services.js";

export const contactLimits = { name: 100, email: 150, phone: 25, company: 150, website: 2048, message: 2000 };

export function validateContact(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (!services.some((service) => service.title === form.service)) errors.service = "Please select a service.";
  if (!form.message.trim()) errors.message = "Please tell us a little about your project.";
  if (form.website.trim()) {
    try {
      const url = new URL(/^https?:\/\//i.test(form.website.trim()) ? form.website.trim() : `https://${form.website.trim()}`);
      if (!/^https?:$/.test(url.protocol) || !url.hostname.includes(".") || url.username || url.password) throw new Error("Invalid website");
    } catch { errors.website = "Please enter a valid website, such as example.com."; }
  }
  for (const [field, limit] of Object.entries(contactLimits)) {
    if (form[field].length > limit) errors[field] = `Please use ${limit} characters or fewer.`;
  }
  return errors;
}
