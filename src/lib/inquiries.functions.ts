import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  businessType: z.string().trim().max(50).optional(),
  requirement: z.string().trim().max(1000).optional(),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      phone: data.phone,
      email: data.email ? data.email : null,
      business_type: data.businessType ?? null,
      requirement: data.requirement ?? null,
    });
    if (error) {
      console.error("[inquiries] insert failed", error.message);
      throw new Error("Could not save your inquiry. Please try again or reach us on WhatsApp.");
    }
    return { ok: true as const };
  });
