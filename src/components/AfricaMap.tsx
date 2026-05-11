import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const AFRICA_NUM = new Set([
  "012","024","072","086","108","120","132","140","148","174","178","180","262",
  "204","218","226","231","232","266","270","288","324","384","404","426","430",
  "434","450","454","466","478","480","504","508","516","562","566","624","646",
  "654","678","686","690","694","706","710","716","728","729","732","736","748",
  "768","788","800","818","834","854","894",
]);

type Live = {
  name: string;
  coords: [number, number];
  tag: string;
  txns: number;
  localCcy: string;
  localAmount: string;
  usd: string;
};

const LIVE: Live[] = [
  { name: "Nigeria",      coords: [8.6753, 9.0820],   tag: "NG", txns: 1247, localCcy: "NGN", localAmount: "₦53,869,080",  usd: "$32,847" },
  { name: "Kenya",        coords: [37.9062, -0.0236], tag: "KE", txns: 836,  localCcy: "KES", localAmount: "KSh 2,781,627", usd: "$21,563" },
  { name: "Ghana",        coords: [-1.0232, 7.9465],  tag: "GH", txns: 512,  localCcy: "GHS", localAmount: "GH₵ 190,400",   usd: "$14,209" },
  { name: "South Africa", coords: [22.9375, -30.5595],tag: "ZA", txns: 489,  localCcy: "ZAR", localAmount: "R 255,341",     usd: "$13,728" },
  { name: "Rwanda",       coords: [29.8739, -1.9403], tag: "RW", txns: 273,  localCcy: "RWF", localAmount: "RWF 10,101,960", usd: "$7,653" },
];

const LIVE_NAMES = new Set(LIVE.map((c) => c.name));
const LIVE_BY_NAME = new Map(LIVE.map((c) => [c.name, c]));

const STATUSES = ["Watching", "Loading", "Coming soon", "On the radar"];
function statusFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return STATUSES[Math.abs(h) % STATUSES.length];
}

type Tip = { name: string; live: boolean; status?: string; data?: Live } | null;

type TractionMarker = {
  name: string;
  coords: [number, number];
  volume: string;
  prominent?: boolean;
};

const TRACTION: TractionMarker[] = [
  { name: "Rwanda",  coords: [29.8739, -1.9403], volume: "$24,350", prominent: true },
  { name: "Nigeria", coords: [8.6753,   9.0820], volume: "$13,720" },
  { name: "Kenya",   coords: [37.9062, -0.0236], volume: "$11,480" },
  { name: "Ghana",   coords: [-1.0232,  7.9465], volume: "$7,630" },
  { name: "Uganda",  coords: [32.2903,  1.3733], volume: "$4,820" },
];
const TRACTION_NAMES = new Set(TRACTION.map((t) => t.name));

export function AfricaMap({ variant = "default" }: { variant?: "default" | "traction" } = {}) {
  if (variant === "traction") return <TractionAfricaMap />;
  const [hover, setHover] = useState<Tip>(null);
  const [pinned, setPinned] = useState<Tip>(null);

  const active = pinned ?? hover;

  return (
    <div
      className="relative w-full"
      onClick={(e) => {
        if (e.target === e.currentTarget) setPinned(null);
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 380, center: [20, 3] }}
        width={800}
        height={720}
        style={{ width: "100%", height: "auto", pointerEvents: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((g) => AFRICA_NUM.has(String(g.id).padStart(3, "0")))
              .map((geo) => {
                const name = geo.properties.name as string;
                const isLive = LIVE_NAMES.has(name);
                const data = LIVE_BY_NAME.get(name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() =>
                      setHover({ name, live: isLive, status: isLive ? undefined : statusFor(name), data })
                    }
                    onMouseLeave={() => setHover(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPinned({ name, live: isLive, status: isLive ? undefined : statusFor(name), data });
                    }}
                    style={{
                      default: {
                        fill: isLive
                          ? "oklch(0.88 0.22 128)"
                          : "oklch(0.42 0.025 170)",
                        stroke: "oklch(0.97 0.005 170)",
                        strokeWidth: 0.8,
                        outline: "none",
                        transition: "fill 200ms",
                      },
                      hover: {
                        fill: isLive
                          ? "oklch(0.94 0.18 128)"
                          : "oklch(0.56 0.04 170)",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
          }
        </Geographies>



        {LIVE.map((c) => {
          const isRwanda = c.tag === "RW";
          if (isRwanda) {
            // Pin floats above Rwanda so the country shape stays visible.
            return (
              <Marker key={c.name} coordinates={c.coords}>
                <motion.g
                  animate={{ y: [-2, -6, -2] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Pin body (teardrop) anchored so the tip sits at y=0 (Rwanda center) */}
                  <g transform="translate(0,-22)">
                    <path
                      d="M0 22 C-7 14 -10 8 -10 2 a10 10 0 1 1 20 0 c0 6 -3 12 -10 20 z"
                      fill="oklch(0.88 0.22 128)"
                      stroke="oklch(0.16 0.02 170)"
                      strokeWidth={1.2}
                    />
                    <circle cx={0} cy={2} r={3.5} fill="oklch(0.16 0.02 170)" />
                  </g>
                </motion.g>
                <text
                  y={-32}
                  textAnchor="middle"
                  style={{
                    fontFamily: "Space Grotesk",
                    fontSize: 14,
                    fontWeight: 700,
                    fill: "oklch(0.16 0.02 170)",
                    stroke: "oklch(0.88 0.22 128)",
                    strokeWidth: 4,
                    paintOrder: "stroke",
                    pointerEvents: "none",
                  }}
                >
                  {c.name}
                </text>
              </Marker>
            );
          }
          return (
            <Marker key={c.name} coordinates={c.coords}>
              <motion.circle
                r={10}
                fill="none"
                stroke="oklch(0.97 0.005 170)"
                strokeWidth={1.5}
                animate={{ r: [6, 18], opacity: [0.9, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <circle r={6} fill="oklch(0.16 0.02 170)" />
              <circle r={3.5} fill="oklch(0.97 0.005 170)" />
              <text
                y={-14}
                textAnchor="middle"
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 13,
                  fontWeight: 700,
                  fill: "oklch(0.16 0.02 170)",
                  stroke: "oklch(0.97 0.005 170)",
                  strokeWidth: 3,
                  paintOrder: "stroke",
                  pointerEvents: "none",
                }}
              >
                {c.name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active.name + (pinned ? "-p" : "-h")}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute left-4 top-4 max-w-[240px] rounded-xl border border-border bg-ink/90 px-4 py-3 text-sm text-foreground backdrop-blur-xl shadow-2xl"
          >
            <div className="font-display text-base">{active.name}</div>
            {active.live && active.data ? (
              <div className="mt-2 space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                  Live
                </span>
                <div className="flex items-baseline justify-between gap-3 text-xs">
                  <span className="text-muted-foreground">Transactions</span>
                  <span className="font-display text-foreground">{active.data.txns.toLocaleString()}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 text-xs">
                  <span className="text-muted-foreground">Processed</span>
                  <span className="font-display text-foreground">{active.data.localAmount}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 text-xs">
                  <span className="text-muted-foreground">≈ USD</span>
                  <span className="font-display text-lime">{active.data.usd}</span>
                </div>
                {!pinned && (
                  <div className="pt-1 text-[10px] text-muted-foreground">Click to pin</div>
                )}
              </div>
            ) : (
              <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground" />
                {active.status} · expansion queue
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-3 right-3 flex items-center gap-3 rounded-full border border-border bg-ink/70 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-lime" /> Live</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-muted" /> Watching</span>
      </div>
    </div>
  );
}

function TractionAfricaMap() {
  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 380, center: [20, 3] }}
        width={800}
        height={620}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((g) => AFRICA_NUM.has(String(g.id).padStart(3, "0")))
              .map((geo) => {
                const name = geo.properties.name as string;
                const isActive = TRACTION_NAMES.has(name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isActive ? "oklch(0.88 0.22 128)" : "oklch(0.42 0.025 170)",
                        stroke: "oklch(0.97 0.005 170)",
                        strokeWidth: 0.8,
                        outline: "none",
                      },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
          }
        </Geographies>

        {TRACTION.map((t) => (
          <Marker key={t.name} coordinates={t.coords}>
            {t.prominent ? (
              <g transform="translate(0,-26)">
                <path
                  d="M0 26 C-8 16 -12 9 -12 2 a12 12 0 1 1 24 0 c0 7 -4 14 -12 24 z"
                  fill="oklch(0.88 0.22 128)"
                  stroke="oklch(0.16 0.02 170)"
                  strokeWidth={1.4}
                />
                <circle cx={0} cy={2} r={4} fill="oklch(0.16 0.02 170)" />
              </g>
            ) : (
              <>
                <circle r={5} fill="oklch(0.16 0.02 170)" />
                <circle r={2.5} fill="oklch(0.97 0.005 170)" />
              </>
            )}
            <g transform={`translate(0, ${t.prominent ? -42 : -14})`}>
              <text
                textAnchor="middle"
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: t.prominent ? 18 : 13,
                  fontWeight: 800,
                  fill: "oklch(0.16 0.02 170)",
                  stroke: t.prominent ? "oklch(0.88 0.22 128)" : "oklch(0.97 0.005 170)",
                  strokeWidth: t.prominent ? 5 : 3.5,
                  paintOrder: "stroke",
                }}
              >
                {t.name} · {t.volume}
              </text>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
