import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Briefcase,
  CheckCircle2,
  Clock,
  Code,
  Coins,
  CreditCard,
  FileText,
  Globe2,
  Instagram,
  Linkedin,
  Link2,
  Lock,
  PlayCircle,
  Repeat,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Twitter,
  Users,
  Wallet,
  XCircle,
  Zap,
} from "lucide-react";
import { SlideShell } from "@/components/SlideShell";
import { AfricaMap } from "@/components/AfricaMap";
import mascot from "@/assets/kuvar-mascot.png";
import dashboard from "@/assets/dashboard.jpg";
import devicesImg from "@/assets/howitworks-devices.png";
import mobileMoneyImg from "@/assets/mobile-money-iphone.png";
import avatarKhadee from "@/assets/avatar-khadee.png";
import avatarSweet from "@/assets/avatar-sweet.png";
import avatarJaypee from "@/assets/avatar-jaypee.png";
import avatarKenneth from "@/assets/avatar-kenneth.png";

const cardHover = {
  whileHover: { y: -4, scale: 1.02, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
  whileTap: { scale: 0.98 },
};

// Mock P2P complaint tweet card
function ComplaintCard({
  handle,
  name,
  time,
  body,
  rotate = 0,
  avatar,
  href,
}: {
  handle: string;
  name: string;
  time: string;
  body: string;
  rotate?: number;
  avatar: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      style={{ rotate: `${rotate}deg` }}
      className="block cursor-pointer rounded-2xl border border-border bg-[#0f1115] p-4 shadow-xl ring-1 ring-white/5 no-underline"
    >
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <img src={avatar} alt={name} className="h-8 w-8 rounded-full object-cover ring-2 ring-lime/30" />
          <div>
            <div className="font-display text-sm text-foreground">{name}</div>
            <div className="text-[10px] text-muted-foreground">@{handle} · {time}</div>
          </div>
        </div>
        <Twitter className="h-3 w-3 text-muted-foreground" />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground/90">{body}</p>
      <div className="mt-3 flex items-center gap-4 text-[10px] text-muted-foreground">
        <span>💬 36</span><span>🔁 5</span><span>❤️ 50</span>
      </div>
    </motion.a>
  );
}

type Slide = { eyebrow?: string; render: () => React.ReactNode };

const slides: Slide[] = [
  // 1. Cover
  {
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime">
            <Sparkles className="h-3 w-3" /> For Businesses & Freelancers
          </span>
          <h1 className="mt-6 font-display text-6xl font-black leading-[0.95] md:text-8xl">
            Accept crypto.<br />
            <span className="text-gradient-lime">Get paid in cash.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            KuvarPay lets your business accept cryptocurrency payments from any
            customer, anywhere in the world and settles directly to your bank
            in local currency. No crypto knowledge required.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl text-foreground">1.5%</span> per transaction</div>
            <div className="h-6 w-px bg-border" />
            <div><span className="font-display text-2xl text-foreground">T+1</span> settlement</div>
            <div className="h-6 w-px bg-border" />
            <div><span className="font-display text-2xl text-foreground">5 min</span> setup</div>
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={mascot}
            alt="Kuvar mascot"
            className="mx-auto max-h-[480px] w-auto object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          />
        </motion.div>
      </div>
    ),
  },

  // 2. Meet Kuvar
  {
    eyebrow: "Meet Kuvar",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-2">
        <motion.img
          src={mascot}
          alt="Kuvar"
          className="mx-auto max-h-[460px] w-auto object-contain"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.06 }}
        />
        <div>
          <h2 className="font-display text-5xl font-black md:text-6xl">
            Hi, I'm <span className="text-gradient-lime">Kuvar.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            I'm here to help your business accept cryptocurrency payments from
            anyone, using over 1300 cryptocurrencies. Without any headache. You
            serve. I settle.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "You sell", v: "Anywhere" },
              { k: "They pay", v: "They pay crypto." },
              { k: "You get", v: "Local currency." },
            ].map((b) => (
              <motion.div {...cardHover} key={b.k} className="cursor-pointer rounded-2xl border border-border bg-card p-4 transition-colors hover:border-lime/60">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{b.k}</div>
                <div className="mt-1 font-display text-lg text-foreground">{b.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 3. The Problem
  {
    eyebrow: "The problem",
    render: () => (
      <div className="grid h-full gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-display text-5xl font-black leading-[1.05] md:text-6xl">
            THE <span className="text-gradient-lime">PROBLEM</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Businesses and freelancers are losing revenue because:
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "Tourists face payment friction (FX, card limits, declined payments)",
              "High POS/card fees (up to 3–4%)",
              "Delayed settlements (T+2 / T+3 from banks)",
              "No access to crypto-paying high-value customers",
              "No modern, simple crypto checkout for global customers",
              "Limited payment options at checkout for foreigners",
              "P2P fiat conversion delays at checkout",
              "Little to no knowledge about crypto acceptance",
            ].map((t) => (
              <motion.li
                key={t}
                whileHover={{ x: 6 }}
                className="flex cursor-pointer items-start gap-2 text-sm text-foreground"
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-5 inline-block border-b-4 border-lime pb-1 font-display text-base">
            👉 Result: Lost sales + poor customer experience
          </div>
        </div>
        <div className="relative">
          {/* lime decorative blobs */}
          <div className="absolute right-0 top-0 -z-0 h-64 w-64 rounded-full bg-lime/30 blur-2xl" />
          <div className="absolute bottom-10 right-20 -z-0 h-40 w-40 rounded-full bg-lime/20 blur-2xl" />
          <div className="relative z-10 grid grid-cols-2 gap-3">
            <ComplaintCard
              rotate={-2}
              avatar={avatarKhadee}
              name="💗💚 khadee"
              handle="dee_nftarmy"
              time="29 Mar"
              href="https://x.com/dee_nftarmy/status/2038187509419504047?s=20"
              body="Another day to fight with P2P vendors 😂😂 It's always when you want to convert big money. And please don't tell me to use spenda."
            />
            <ComplaintCard
              rotate={3}
              avatar={avatarSweet}
              name="sweet_coder"
              handle="AdegbemboB"
              time="16 Feb"
              href="https://x.com/AdegbemboB/status/2023322897993867771?s=20"
              body="Some of these P2P vendors on these exchanges are actually thieves 😭 I tried to sell my USDT… I was supposed to get 553,000 naira, but this vendor sent me 535,000 thinking I wouldn't notice. He really wanted to scam me."
            />
            <ComplaintCard
              rotate={-3}
              avatar={avatarJaypee}
              name="JayPee👑"
              handle="Mr_Jay_Pee"
              time="2 May"
              href="https://x.com/Mr_Jay_Pee/status/2050678019065295019?s=20"
              body="If you want to see scammers, visit Bybit P2P. That's home of Scam Vendors. Even the ones with 96% completion and 2000+ trades, doesn't still work. Even 100% record aren't legit too."
            />
            <ComplaintCard
              rotate={2}
              avatar={avatarKenneth}
              name="Kenn_eth"
              handle="keenn_eth"
              time="1 May"
              href="https://x.com/keenn_eth/status/2050205543906607316?s=20"
              body="I just got scammed on Bybit p2p. Buyer kept saying 'accept your incoming pending transaction so the money can drop'… reporting you for scam."
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Why should your customer go through this when you can let them pay
            crypto <span className="text-lime">directly at checkout?</span>
          </p>
        </div>
      </div>
    ),
  },
  // 5. How it works
  {
    eyebrow: "How it works",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-black md:text-6xl">
          Live in <span className="text-gradient-lime">5 minutes.</span>
        </h2>
        <div className="mt-8 grid flex-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            {[
              { n: "01", t: "Business creates a payment request", d: "Create a payment link, send an invoice, download a QR code, or integrate our API into your website or system." },
              { n: "02", t: "Customer pays using crypto", d: "Customer clicks the link, scans the QR code, or pays through the checkout using their preferred cryptocurrency." },
              { n: "03", t: "KuvarPay confirms instantly", d: "We securely receive and verify the crypto payment in real time." },
              { n: "04", t: "Settlement in local currency", d: "We auto-convert the crypto and settle to your bank in your local currency." },
            ].map((s) => (
              <motion.div {...cardHover} key={s.n} className="cursor-pointer rounded-2xl border border-border bg-card p-4 transition-colors hover:border-lime/60">
                <div className="flex items-baseline gap-3">
                  <div className="font-display text-2xl text-lime">{s.n}</div>
                  <div className="font-display text-lg">{s.t}</div>
                </div>
                <p className="mt-1 pl-9 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src={devicesImg}
              alt="KuvarPay dashboard on laptop and mobile checkout"
              className="mx-auto w-full max-w-[480px] object-contain"
              loading="lazy"
            />
            <div className="w-full">
              <div className="mb-2 text-center text-[10px] uppercase tracking-widest text-lime">Settlement to your bank</div>
              <img
                src={mobileMoneyImg}
                alt="Mobile money settlement of 800,000 RWF"
                className="mx-auto w-full max-w-[360px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 6. Why KuvarPay (benefits)
  {
    eyebrow: "Why KuvarPay",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-black md:text-6xl">
          More sales. <span className="text-gradient-lime">Less friction.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { i: Coins, t: "Lower fees", d: "Just 1.5% from customers, zero charges on the business." },
            { i: Clock, t: "Instant settlement", d: "T+1 to your bank, no more T+3 waits." },
            { i: Globe2, t: "Global customers", d: "Tourists & remote buyers can finally pay." },
            { i: ShieldCheck, t: "No chargebacks", d: "Crypto payments are final & verified." },
            { i: BadgeCheck, t: "Compliance built-in", d: "KYC/AML & sanctions screened end-to-end." },
            { i: Zap, t: "Zero crypto skill", d: "Your team uses cash. We handle the rest." },
          ].map(({ i: Icon, t, d }) => (
            <motion.div
              {...cardHover}
              key={t}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-colors hover:border-lime/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime transition-all group-hover:bg-lime group-hover:text-ink">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  // 8. Tools
  {
    eyebrow: "Your toolkit",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-black md:text-6xl">
          Everything you need <span className="text-gradient-lime">in one place.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { i: Link2, t: "Payment Link", d: "QR code download." },
            { i: FileText, t: "Invoicing", d: "" },
            { i: Repeat, t: "Subscription", d: "" },
            { i: Code, t: "API Generation", d: "" },
            { i: Wallet, t: "POS App", d: "" },
            { i: ShoppingCart, t: "WooCommerce Plugin", d: "" },
            { i: Lock, t: "Secure Dashboard", d: "" },
          ].map(({ i: Icon, t, d }) => (
            <motion.div
              {...cardHover}
              key={t}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-colors hover:border-lime/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime transition-all group-hover:bg-lime group-hover:text-ink">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl">{t}</div>
              {d && <p className="mt-2 text-sm text-muted-foreground">{d}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },

  // 9. Live across Africa
  {
    eyebrow: "Live across Africa",
    render: () => (
      <div className="grid h-full items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-5xl font-black md:text-6xl">
            5 countries. <span className="text-gradient-lime">One rail.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We're already settling local currency for merchants across the
            continent's largest crypto markets, your business is next.
          </p>
          <div className="mt-8 space-y-2">
            {["Nigeria","Ghana","Kenya","Rwanda","South Africa"].map((c) => (
              <motion.div {...cardHover} key={c} className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-lime/60">
                <span className="font-display text-foreground">{c}</span>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-lime">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Live
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <AfricaMap />
        </div>
      </div>
    ),
  },

  // 10. Pricing
  {
    eyebrow: "Pricing",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-black md:text-6xl">
          Simple, transparent <span className="text-gradient-lime">pricing.</span>
        </h2>
        <div className="mt-12 grid flex-1 gap-6 md:grid-cols-3">
          {[
            { t: "Per transaction", v: "1.5%", d: "1.5% flat fee on every successful customer's payment. No hidden charge." },
            { t: "Setup", v: "Free", d: "Zero onboarding cost. Get live in under 5 minutes." },
            { t: "Monthly", v: "$0", d: "No subscription needed." },
          ].map((b) => (
            <motion.div {...cardHover} key={b.t} className="cursor-pointer rounded-3xl border border-border bg-card p-8 transition-colors hover:border-lime/60">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.t}</div>
              <div className="text-gradient-lime mt-3 font-display text-6xl font-black">{b.v}</div>
              <p className="mt-4 text-muted-foreground">{b.d}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Compare: Visa/Mastercard charge 2.5–4% + delayed settlement. KuvarPay
          is <span className="text-lime">3x cheaper</span> and pays you the same day.
        </p>
      </div>
    ),
  },

  // 11. Onboarding
  {
    eyebrow: "Onboarding",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-black md:text-6xl">
          Onboarding in <span className="text-gradient-lime">3 steps.</span>
        </h2>
        <div className="mt-12 grid flex-1 gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "We meet", d: "15-min call to understand your business & pick the right tools." },
            { n: "02", t: "We set up", d: "We provision your dashboard, branded checkout, QR codes & POS." },
            { n: "03", t: "We train", d: "Your team learns to accept payments — no crypto knowledge needed." },
          ].map((s) => (
            <motion.div {...cardHover} key={s.n} className="cursor-pointer rounded-3xl border border-border bg-card p-8 transition-colors hover:border-lime/60">
              <div className="font-display text-4xl text-lime">{s.n}</div>
              <div className="mt-4 font-display text-2xl">{s.t}</div>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-lime/30 bg-lime/5 p-6 text-sm text-muted-foreground">
          <span className="font-display text-foreground">First month free.</span>{" "}
          Onboard now and pay zero fees on your first 30 days of transactions.
        </div>
      </div>
    ),
  },

  // 12. CTA
  {
    eyebrow: "Let's get you paid",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-6xl font-black leading-[0.95] md:text-7xl">
            Ready to accept<br />
            <span className="text-gradient-lime">the world?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Join the businesses and freelancers turning every global
            customer into local cash.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://kuvarpay.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-display text-ink"
            >
              <Rocket className="h-4 w-4" /> Get started at kuvarpay.com
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.kuvarpay.com/demo-dashboard/overview"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-6 py-3 font-display text-lime hover:bg-lime/20"
            >
              <PlayCircle className="h-5 w-5" /> Explore demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hq@kuvarpay.com&su=Book%20a%20call%20with%20KuvarPay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-display text-foreground hover:border-lime/60"
            >
              Book a call <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              { i: Twitter, l: "Twitter", h: "https://twitter.com/kuvarpay" },
              { i: Instagram, l: "Instagram", h: "https://instagram.com/kuvarpay" },
              { i: Linkedin, l: "LinkedIn", h: "https://linkedin.com/company/kuvarpay" },
            ].map(({ i: Icon, l, h }) => (
              <motion.a
                key={l}
                href={h}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-lime/60 hover:text-lime"
              >
                <Icon className="h-4 w-4" /> {l}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={mascot}
            alt="Kuvar"
            className="mx-auto max-h-[460px] w-auto object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
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

      <div className="fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-card/80 px-2 py-1 backdrop-blur-xl">
        <button
          onClick={() => setI((p) => Math.max(p - 1, 0))}
          disabled={i === 0}
          className="flex h-6 w-6 items-center justify-center rounded-full text-foreground transition hover:bg-secondary disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-3 w-3" />
        </button>
        <div className="flex items-center gap-1 px-1.5 text-[10px] font-medium tabular-nums text-muted-foreground">
          <span className="text-foreground">{i + 1}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
        <button
          onClick={() => setI((p) => Math.min(p + 1, total - 1))}
          disabled={i === total - 1}
          className="flex h-6 w-6 items-center justify-center rounded-full text-foreground transition hover:bg-secondary disabled:opacity-30"
          aria-label="Next slide"
        >
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
