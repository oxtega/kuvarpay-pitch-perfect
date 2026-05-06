import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Boxes,
  CheckCircle2,
  Globe2,
  LineChart,
  Lock,
  Repeat,
  Rocket,
  Sparkles,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import { SlideShell } from "@/components/SlideShell";
import { AfricaMap } from "@/components/AfricaMap";
import mascot from "@/assets/kuvar-mascot.jpg";
import logo from "@/assets/kuvarpay-logo.jpg";
import dashboard from "@/assets/dashboard.jpg";

type Slide = { eyebrow?: string; render: () => JSX.Element };

const slides: Slide[] = [
  // 1. Cover
  {
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime">
            <Sparkles className="h-3 w-3" /> Investor Pitch · 2026
          </span>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] md:text-8xl">
            Crypto payments,<br />
            <span className="text-gradient-lime">made for Africa.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            KuvarPay is the regulated payment gateway turning crypto into a
            safe, everyday way for African businesses to get paid — settled in
            local currency, on Stellar.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl text-foreground">5</span> countries live</div>
            <div className="h-6 w-px bg-border" />
            <div><span className="font-display text-2xl text-foreground">1,200+</span> currencies</div>
            <div className="h-6 w-px bg-border" />
            <div><span className="font-display text-2xl text-foreground">10+</span> chains</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-lime/20 blur-3xl" />
          <img src={mascot} alt="Kuvar mascot" className="mx-auto max-h-[560px] drop-shadow-2xl" />
        </div>
      </div>
    ),
  },

  // 2. Meet Kuvar
  {
    eyebrow: "Meet Kuvar",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-2">
        <img src={mascot} alt="Kuvar" className="mx-auto max-h-[520px]" />
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            Hi, I'm <span className="text-gradient-lime">Kuvar.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Like a chameleon, I adapt fast — so your crypto payments stay
            smooth across any chain, any currency, any country.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Adapt", v: "10+ chains" },
              { k: "Settle", v: "Stellar rails" },
              { k: "Deliver", v: "Local money" },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-border bg-card p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{b.k}</div>
                <div className="mt-1 font-display text-lg text-foreground">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 3. Problem
  {
    eyebrow: "The problem",
    render: () => (
      <div className="grid h-full gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-5xl font-bold leading-tight md:text-6xl">
            Africa's <span className="text-gradient-lime">P2P scam</span> crisis.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Millions trade crypto peer-to-peer — and pay the price. Traders
            unknowingly receive stolen funds, get arrested, and have their
            accounts frozen. There's no merchant-grade rail to accept crypto
            cleanly.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { i: AlertTriangle, t: "Frozen accounts", d: "Banks block traders linked to dirty inflows." },
            { i: Lock, t: "Legal exposure", d: "Receiving stolen crypto = criminal liability." },
            { i: Workflow, t: "Zero compliance", d: "P2P bypasses KYC, sanctions and audit trails." },
            { i: Globe2, t: "No global reach", d: "Local merchants can't accept overseas crypto." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-lime" />
              <div className="mt-3 font-display text-xl">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 4. Solution
  {
    eyebrow: "Our solution",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            A regulated rail for <span className="text-gradient-lime">crypto-native commerce.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Customers pay in any crypto, any chain. KuvarPay screens, converts,
            and settles via Stellar — landing local currency in the merchant's
            bank or USDC in their wallet.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Sanctions + KYB screened end-to-end",
              "Auto-conversion across 1,200+ currencies",
              "Stellar settlement with full audit trail",
              "One JS snippet to go live",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-lime" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-lime/15 blur-2xl" />
          <img
            src={dashboard}
            alt="KuvarPay dashboard"
            className="rounded-2xl border border-border ring-lime-glow"
          />
        </div>
      </div>
    ),
  },

  // 5. Product features
  {
    eyebrow: "Product",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Full-stack <span className="text-gradient-lime">payment infrastructure.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { i: Zap, t: "Hosted Checkout", d: "One snippet, 1,200+ currencies, 10+ chains." },
            { i: Repeat, t: "Subscriptions", d: "Fixed + metered billing on Soroban." },
            { i: Boxes, t: "Split Payments", d: "Marketplace-grade multi-party routing." },
            { i: Wallet, t: "POS App", d: "In-person crypto for retail merchants." },
            { i: Workflow, t: "Payment Agent", d: "Autonomous payouts & disbursements." },
            { i: LineChart, t: "Dashboard + SDK", d: "Analytics, webhooks, WooCommerce plugin." },
          ].map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-lime/60 hover:bg-card/70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 6. How it works
  {
    eyebrow: "How it works",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          One flow. <span className="text-gradient-lime">Every payment.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Customer pays", d: "Any token, any chain via hosted modal." },
            { n: "02", t: "Auto-convert", d: "Routed and converted to USDC." },
            { n: "03", t: "Stellar settles", d: "Universal settlement layer." },
            { n: "04", t: "Merchant gets paid", d: "Local fiat or USDC on Stellar." },
          ].map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-3xl text-lime">{s.n}</div>
              <div className="mt-3 font-display text-xl">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < 3 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-lime md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-lime/30 bg-lime/5 p-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-display text-foreground">Stellar is the backbone.</span>{" "}
            Every payment converges on Stellar — generating real network volume
            from every transaction processed.
          </p>
        </div>
      </div>
    ),
  },

  // 7. Africa map
  {
    eyebrow: "Live across Africa",
    render: () => (
      <div className="grid h-full items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            5 countries. <span className="text-gradient-lime">One rail.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            KuvarPay is processing real merchant transactions across the
            continent's largest crypto markets — with anchor coverage to
            deliver local fiat to every account.
          </p>
          <div className="mt-8 space-y-2">
            {["Nigeria","Ghana","Kenya","Rwanda","South Africa"].map((c) => (
              <div key={c} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
                <span className="font-display text-foreground">{c}</span>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-lime">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Live
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-4">
          <AfricaMap />
        </div>
      </div>
    ),
  },

  // 8. Market
  {
    eyebrow: "Market",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          A continent of <span className="text-gradient-lime">crypto buyers.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-6 md:grid-cols-3">
          {[
            { v: "$125B", l: "Sub-Saharan Africa crypto volume (annual)" },
            { v: "84M", l: "Active African crypto users" },
            { v: "$40B", l: "African e-commerce TAM by 2027" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl border border-border bg-card p-8">
              <div className="text-gradient-lime font-display text-6xl font-bold">{s.v}</div>
              <p className="mt-4 text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          African merchants don't lack demand — they lack a safe, compliant
          way to capture it. KuvarPay is the missing rail.
        </p>
      </div>
    ),
  },

  // 9. Traction
  {
    eyebrow: "Traction",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Shipped. Live. <span className="text-gradient-lime">Growing.</span>
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {[
              "Hosted payment gateway — Live",
              "Stellar USDC acceptance via Horizon — Live",
              "Multi-currency FX (USD/EUR/GBP → NGN/RWF/KES) — Live",
              "Subscription billing (Fixed + Metered) — Live",
              "WooCommerce plugin on WordPress.org — Live",
              "Yellow Card anchor integration — In progress",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                <span className="text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "5", l: "Countries live" },
              { v: "10+", l: "Blockchains supported" },
              { v: "1,200+", l: "Currencies accepted" },
              { v: "100%", l: "Stellar-settled" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-gradient-lime font-display text-5xl font-bold">{s.v}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 10. Business model
  {
    eyebrow: "Business model",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Margins that <span className="text-gradient-lime">scale with volume.</span>
        </h2>
        <div className="mt-12 grid flex-1 gap-6 md:grid-cols-3">
          {[
            { t: "Transaction fee", v: "1.5%", d: "Per successful merchant payment." },
            { t: "FX spread", v: "0.8%", d: "On crypto → local fiat conversions." },
            { t: "SaaS + add-ons", v: "$49+/mo", d: "Subscriptions, APA, advanced analytics." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.t}</div>
              <div className="text-gradient-lime mt-3 font-display text-6xl font-bold">{b.v}</div>
              <p className="mt-4 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 11. Team
  {
    eyebrow: "Team",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Built by <span className="text-gradient-lime">operators.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { n: "Aderemi Azeez", r: "Founder & CEO", t: "BTC" },
            { n: "Abdulazeez Jubril", r: "Co-Founder & COO", t: "ETH" },
            { n: "Funmi Davies", r: "CFO", t: "USDT" },
            { n: "Christopher Tega", r: "CMO", t: "BNB" },
            { n: "Diana Ekefre", r: "Marketing Officer", t: "SOL" },
            { n: "Alarape Yusuf", r: "Graphic Designer", t: "XTZ" },
          ].map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="font-display text-xl">{p.n}</div>
                <span className="rounded-full border border-lime/30 bg-lime/10 px-2 py-0.5 text-xs font-medium text-lime">
                  {p.t}
                </span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{p.r}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 12. Ask / CTA
  {
    eyebrow: "The ask",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-6xl font-bold leading-[0.95] md:text-7xl">
            Help us make crypto<br />
            <span className="text-gradient-lime">Africa's payment standard.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We're raising to deepen anchor coverage across all 5 markets,
            scale merchant acquisition, and ship Soroban subscriptions to
            mainnet.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: "$1.5M", l: "Seed round" },
              { v: "18mo", l: "Runway" },
              { v: "10x", l: "Merchant target" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-lime/40 bg-lime/5 p-4">
                <div className="text-gradient-lime font-display text-3xl font-bold">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://kuvarpay.com"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-display text-ink transition hover:scale-[1.02]"
            >
              <Rocket className="h-4 w-4" /> kuvarpay.com
            </a>
            <span className="text-sm text-muted-foreground">hello@kuvarpay.com</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-lime/20 blur-3xl" />
          <img src={mascot} alt="Kuvar" className="mx-auto max-h-[520px]" />
        </div>
      </div>
    ),
  },
];

export function Deck() {
  const [i, setI] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") setI((p) => Math.min(p + 1, total - 1));
      if (e.key === "ArrowLeft") setI((p) => Math.max(p - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const slide = slides[i];

  return (
    <div className="relative min-h-screen bg-background bg-grain">
      <AnimatePresence mode="wait">
        <SlideShell key={i} index={i} total={total} eyebrow={slide.eyebrow}>
          {slide.render()}
        </SlideShell>
      </AnimatePresence>

      {/* Nav */}
      <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-card/80 px-3 py-2 backdrop-blur-xl">
        <button
          onClick={() => setI((p) => Math.max(p - 1, 0))}
          disabled={i === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition hover:bg-secondary disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5 px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-lime" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setI((p) => Math.min(p + 1, total - 1))}
          disabled={i === total - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition hover:bg-secondary disabled:opacity-30"
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
