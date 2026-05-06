import { motion } from "framer-motion";
import type { ReactNode } from "react";
import logo from "@/assets/kuvarpay-logo.jpg";

export function SlideShell({
  index,
  total,
  eyebrow,
  children,
}: {
  index: number;
  total: number;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      key={index}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col px-6 py-10 md:px-12"
    >
      <header className="flex items-center justify-between pb-8">
        <img src={logo} alt="KuvarPay" className="h-8 w-auto" />
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
            {eyebrow}
          </span>
        )}
        <span className="font-display text-sm tabular-nums text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </header>
      <div className="flex-1">{children}</div>
    </motion.section>
  );
}
