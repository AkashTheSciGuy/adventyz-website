import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, contactLimits } from "../src/utils/contactValidation.js";

const valid = { name: "Audit", email: "audit@example.com", phone: "", company: "", website: "", service: "Digital Marketing", budget: "", message: "Test project" };

test("accepts valid optional fields, surrounding whitespace and domain or HTTPS websites", () => {
  for (const website of ["", "example.com", "https://example.com/path?x=1", "http://example.com"]) {
    assert.deepEqual(validateContact({ ...valid, website, email: " audit@example.com " }), {});
  }
});
test("rejects empty and whitespace-only required fields", () => {
  const errors = validateContact({ ...valid, name: "   ", email: "", service: "", message: "\n " });
  assert.deepEqual(Object.keys(errors), ["name", "email", "service", "message"]);
});
test("rejects malformed email and unavailable services", () => {
  for (const email of ["a@@example.com", "a@example", "a b@example.com", "@example.com"]) assert.ok(validateContact({ ...valid, email }).email);
  assert.ok(validateContact({ ...valid, service: "unknown" }).service);
});
test("rejects non-web schemes, credentials and malformed websites", () => {
  for (const website of ["javascript:alert(1)", "ftp://example.com", "https://user:pass@example.com", "https://", "not a domain"]) assert.ok(validateContact({ ...valid, website }).website, website);
});
test("enforces every length limit", () => {
  for (const [field, limit] of Object.entries(contactLimits)) {
    assert.match(validateContact({ ...valid, [field]: "a".repeat(limit + 1) })[field], /characters or fewer/);
  }
});
test("handles repeated validation without mutating input", () => {
  const form = Object.freeze({ ...valid });
  for (let index = 0; index < 10000; index++) assert.deepEqual(validateContact(form), {});
});
