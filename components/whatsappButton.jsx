import { MessageCircle } from "lucide-react";
import { config } from "../lib/config";

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${config.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}
