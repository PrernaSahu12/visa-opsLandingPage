/**
 * DigiWire Contact & Lead Submission API Service
 * Endpoint: https://digi-wire.com/contact.php
 */

export const CONTACT_API_ENDPOINT = "https://digi-wire.com/contact.php";

/**
 * Submit lead or enquiry payload to the backend PHP endpoint.
 *
 * Backend expects:
 * - product: 'digiwire' | 'vyxel_crm' | 'vyxel_reality' | 'vyxel_learn'
 * - name: string (required)
 * - email: string (required, valid email)
 * - phone: string (required for vyxel_crm)
 * - counsellors: string (required for vyxel_crm)
 * - company: string (optional)
 * - representation: string (optional)
 * - website: string (optional)
 * - services: string (optional)
 * - budget: string (optional)
 * - message: string (optional)
 */
export async function submitContactEnquiry({
  product = "vyxel_crm",
  name,
  email,
  phone,
  company = "",
  representation = "",
  counsellors = "1-5",
  website = "",
  services = "",
  budget = "",
  message = "",
}) {
  const payload = {
    product,
    name: name?.trim() || "",
    email: email?.trim() || "",
    phone: phone?.trim() || "",
    company: company?.trim() || "",
    representation: representation?.trim() || "",
    counsellors: counsellors?.trim() || "1-5",
    website: website?.trim() || "",
    services: services?.trim() || "",
    budget: budget?.trim() || "",
    message: message?.trim() || "",
  };

  try {
    const response = await fetch(CONTACT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {
      throw new Error(
        data?.message || `Server responded with status ${response.status}`
      );
    }

    return data;
  } catch (error) {
    console.error("Contact API submission error:", error);
    throw error;
  }
}
