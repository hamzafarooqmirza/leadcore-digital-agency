import { Phone, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-black/40 hover:scale-105 transition"
        style={{ background: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Call now"
        className="h-14 w-14 rounded-full bg-gold text-gold-foreground flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 transition"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
