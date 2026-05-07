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
  Coins,
  CreditCard,
  Globe2,
  Instagram,
  Linkedin,
  Lock,
  Repeat,
  Rocket,
  ShieldCheck,
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
import avatarVickish from "@/assets/avatar-vickish.png";
import avatarBaddy from "@/assets/avatar-baddy.png";
import avatarTori from "@/assets/avatar-tori.png";
import avatarRemia from "@/assets/avatar-remia.png";

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
}: {
  handle: string;
  name: string;
  time: string;
  body: string;
  rotate?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      style={{ rotate: `${rotate}deg` }}
      className="cursor-pointer rounded-2xl border border-border bg-[#0f1115] p-4 shadow-xl ring-1 ring-white/5"
    >
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-lime/60 to-lime/20" />
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
    </motion.div>
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
            <Sparkles className="h-3 w-3" /> For Restaurants, Clubs & Retail
          </span>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] md:text-8xl">
            Accept crypto.<br />
            <span className="text-gradient-lime">Get paid in cash.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            KuvarPay lets your business accept payments from any customer,
            anywhere in the world — and settles directly to your bank in
            local currency. No crypto knowledge required.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl text-foreground">0.9%</span> per transaction</div>
            <div className="h-6 w-px bg-border" />
            <div><span className="font-display text-2xl text-foreground">T+0</span> settlement</div>
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
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-lime/20 blur-3xl" />
          <motion.img
            src={mascot}
            alt="Kuvar mascot"
            className="mx-auto max-h-[480px] w-auto object-contain drop-shadow-2xl"
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
          className="mx-auto max-h-[460px] w-auto object-contain drop-shadow-2xl"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.06 }}
        />
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            Hi, I'm <span className="text-gradient-lime">Kuvar.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            I'm here to help your business accept payments from anyone, in any
            currency — without the headache. You serve. I settle.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "You sell", v: "Anywhere" },
              { k: "They pay", v: "Anyhow" },
              { k: "You get", v: "Local cash" },
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
          <h2 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            THE <span className="text-gradient-lime">PROBLEM</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Restaurants, nightclubs & retail businesses are losing revenue because:
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
              name="vickish | devrel"
              handle="Vickish11"
              time="16 Jan"
              body="some of you take st*pid risks. I went to dinner with this guy; he knew he didn't have cash to pay for dinner, but he still waited until we were almost done eating to start a p2p transfer. The p2p person didn't respond — I ended up paying."
            />
            <ComplaintCard
              rotate={3}
              name="Baddy of Lagos"
              handle="baddylagos"
              time="19 Aug"
              body="Omo, I no go lie… P2P vendors don humble me tire. You send crypto to them and they'll say 'give me 20mins.' Next thing, 1hr don pass. Some even switch off phone when market change."
            />
            <ComplaintCard
              rotate={-3}
              name="Tori"
              handle="Toribatieegirl"
              time="17 Jul"
              body="What scares you most about P2P platforms? Waste of time? Scammers? Risky? Over 100 trades done with Bybit's P2P, no issues — but only because I vet every user."
            />
            <ComplaintCard
              rotate={2}
              name="Remia"
              handle="remiaxyz"
              time="3d"
              body="Unpopular opinion: P2P crypto trading is worse now than it was 3 years ago. Scam volume keeps climbing. Platforms don't care. CEXs aren't any better — they freeze your account for 'review' whenever they feel like it."
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

  // 4. The solution
  {
    eyebrow: "The solution",
    render: () => (
      <div className="grid h-full items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            One checkout. <span className="text-gradient-lime">Every customer.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Plug KuvarPay into your POS, website or invoice link. Your customer
            pays in any crypto, any chain — you receive local currency in your
            bank, instantly.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Accept payments from tourists & global customers",
              "Settle to your bank account in NGN, KES, GHS, RWF, ZAR",
              "No chargebacks. No frozen funds. No P2P scams.",
              "Lower fees than Visa, Mastercard or POS terminals",
            ].map((t) => (
              <motion.div
                key={t}
                whileHover={{ x: 6 }}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 text-foreground transition-colors hover:bg-lime/5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-lime" />
                <span>{t}</span>
              </motion.div>
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

  // 5. How it works
  {
    eyebrow: "How it works",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Live in <span className="text-gradient-lime">5 minutes.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Sign up", d: "Create your KuvarPay merchant account in minutes." },
            { n: "02", t: "Add to checkout", d: "QR code, POS, link or website plugin." },
            { n: "03", t: "Customer pays", d: "Any crypto, any chain, any country." },
            { n: "04", t: "You get cash", d: "Local currency lands in your bank." },
          ].map((s, i) => (
            <motion.div {...cardHover} key={s.n} className="relative cursor-pointer rounded-2xl border border-border bg-card p-6 transition-colors hover:border-lime/60">
              <div className="font-display text-3xl text-lime">{s.n}</div>
              <div className="mt-3 font-display text-xl">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < 3 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-lime md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },

  // 6. Why KuvarPay (benefits)
  {
    eyebrow: "Why KuvarPay",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          More sales. <span className="text-gradient-lime">Less friction.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { i: Coins, t: "Lower fees", d: "Just 0.9% — vs 3–4% on POS / cards." },
            { i: Clock, t: "Instant settlement", d: "T+0 to your bank. No more T+3 waits." },
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

  // 7. Built for your business (use cases)
  {
    eyebrow: "Built for you",
    render: () => (
      <div className="flex h-full flex-col">
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Made for <span className="text-gradient-lime">your business.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Utensils, t: "Restaurants", d: "QR at the table — tourists pay in seconds." },
            { i: PartyPopper, t: "Nightclubs", d: "Bottle service, VIP tabs, no card declines." },
            { i: Store, t: "Retail", d: "Walk-in & online sales, one rail." },
            { i: Landmark, t: "Hotels & travel", d: "Bookings, deposits, room charges." },
          ].map(({ i: Icon, t, d }) => (
            <motion.div {...cardHover} key={t} className="group cursor-pointer rounded-3xl border border-border bg-card p-6 transition-colors hover:border-lime/60">
              <Icon className="h-8 w-8 text-lime" />
              <div className="mt-4 font-display text-2xl">{t}</div>
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
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Everything you need <span className="text-gradient-lime">in one place.</span>
        </h2>
        <div className="mt-10 grid flex-1 gap-4 md:grid-cols-3">
          {[
            { i: CreditCard, t: "Hosted Checkout", d: "Branded payment page in one click." },
            { i: Wallet, t: "POS App", d: "Tablet & phone friendly for in-person sales." },
            { i: Repeat, t: "Subscriptions", d: "Memberships & recurring billing." },
            { i: Boxes, t: "Payment Links", d: "Send a link via WhatsApp, get paid." },
            { i: Lock, t: "Secure Dashboard", d: "Track every payment & payout." },
            { i: Zap, t: "WooCommerce Plugin", d: "Drop-in for any online store." },
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

  // 9. Live across Africa
  {
    eyebrow: "Live across Africa",
    render: () => (
      <div className="grid h-full items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            5 countries. <span className="text-gradient-lime">One rail.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We're already settling local currency for merchants across the
            continent's largest crypto markets — your business is next.
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
        <div className="rounded-3xl border border-border bg-card p-4">
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
        <h2 className="font-display text-5xl font-bold md:text-6xl">
          Simple, transparent <span className="text-gradient-lime">pricing.</span>
        </h2>
        <div className="mt-12 grid flex-1 gap-6 md:grid-cols-3">
          {[
            { t: "Per transaction", v: "0.9%", d: "Flat fee on every successful payment. No hidden charges." },
            { t: "Setup", v: "Free", d: "Zero onboarding cost. Get live in under 5 minutes." },
            { t: "Monthly", v: "$0", d: "No subscription. Pay only when you get paid." },
          ].map((b) => (
            <motion.div {...cardHover} key={b.t} className="cursor-pointer rounded-3xl border border-border bg-card p-8 transition-colors hover:border-lime/60">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.t}</div>
              <div className="text-gradient-lime mt-3 font-display text-6xl font-bold">{b.v}</div>
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
        <h2 className="font-display text-5xl font-bold md:text-6xl">
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
          <h2 className="font-display text-6xl font-bold leading-[0.95] md:text-7xl">
            Ready to accept<br />
            <span className="text-gradient-lime">the world?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Join the restaurants, clubs and retailers turning every walk-in
            tourist and global customer into local cash.
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
              href="mailto:hello@kuvarpay.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-display text-foreground hover:border-lime/60"
            >
              Book a demo <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">hello@kuvarpay.com</div>
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
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-lime/20 blur-3xl" />
          <motion.img
            src={mascot}
            alt="Kuvar"
            className="mx-auto max-h-[460px] w-auto object-contain drop-shadow-2xl"
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
