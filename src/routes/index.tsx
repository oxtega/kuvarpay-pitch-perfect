import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/Deck";

export const Route = createFileRoute("/")({
  component: Deck,
  head: () => ({
    meta: [
      { title: "KuvarPay · Investor Pitch" },
      { name: "description", content: "KuvarPay — the regulated crypto payment gateway built for African businesses. Live in 5 countries, settled on Stellar." },
    ],
  }),
});
