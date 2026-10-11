import test from "node:test";
import assert from "node:assert/strict";
import { buildContactEmail, buildWhatsAppUrl } from "../src/utils/contactHandoffs.js";

const details = { name: " Audit & Test ", email: "audit@example.com", phone: "+91 123", company: "", website: "", budget: "", service: "Branding & Creative Design", message: "QA only: ₹ & # + ?\nDo not send." };
test("email draft uses the approved recipient and safely encodes all fields", () => {
  const url = new URL(buildContactEmail(details));
  assert.equal(url.pathname, "infoadventyz@gmail.com");
  assert.match(url.searchParams.get("body"), /Name: Audit & Test/);
  assert.match(url.searchParams.get("body"), /₹ & # \+ \?/);
  assert.doesNotMatch(url.searchParams.get("body"), /Company:/);
});
test("WhatsApp handoff encodes punctuation, Unicode and line breaks exactly once", () => {
  const url = new URL(buildWhatsAppUrl(details));
  assert.equal(url.origin + url.pathname, "https://wa.me/918105579097");
  assert.match(url.searchParams.get("text"), /Name: Audit & Test/);
  assert.match(url.searchParams.get("text"), /Project: QA only: ₹ & # \+ \?\nDo not send\./);
  assert.equal([...url.searchParams.keys()].length, 1);
});
