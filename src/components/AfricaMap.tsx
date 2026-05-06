import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric codes for African countries (used by world-atlas)
const AFRICA_NUM = new Set([
  "012","024","072","086","108","120","132","140","148","174","178","180","262",
  "204","218","226","231","232","266","270","288","324","384","404","426","430",
  "434","450","454","466","478","480","504","508","516","562","566","624","646",
  "654","678","686","690","694","706","710","716","728","729","732","736","748",
  "768","788","800","818","834","854","894",
]);

type Live = { name: string; coords: [number, number]; tag: string };
const LIVE: Live[] = [
  { name: "Nigeria",      coords: [8.6753, 9.0820],  tag: "NG" },
  { name: "Ghana",        coords: [-1.0232, 7.9465], tag: "GH" },
  { name: "Kenya",        coords: [37.9062, -0.0236], tag: "KE" },
  { name: "Rwanda",       coords: [29.8739, -1.9403], tag: "RW" },
  { name: "South Africa", coords: [22.9375, -30.5595], tag: "ZA" },
];

const LIVE_NAMES = new Set(LIVE.map((c) => c.name));

export function AfricaMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 380, center: [20, 3] }}
        width={800}
        height={720}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((g) => AFRICA_NUM.has(String(g.id).padStart(3, "0")))
              .map((geo) => {
                const name = geo.properties.name as string;
                const isLive = LIVE_NAMES.has(name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill: isLive
                          ? "oklch(0.88 0.22 128)"
                          : "oklch(0.27 0.02 170)",
                        stroke: "oklch(0.16 0.02 170)",
                        strokeWidth: 0.6,
                        outline: "none",
                        transition: "fill 200ms",
                      },
                      hover: {
                        fill: isLive
                          ? "oklch(0.94 0.18 128)"
                          : "oklch(0.34 0.02 170)",
                        outline: "none",
                        cursor: isLive ? "pointer" : "default",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
          }
        </Geographies>

        {LIVE.map((c) => (
          <Marker key={c.name} coordinates={c.coords}>
            <circle r={6} fill="oklch(0.16 0.02 170)" />
            <circle r={4} fill="oklch(0.97 0.005 170)" />
            <motion.circle
              r={10}
              fill="none"
              stroke="oklch(0.94 0.18 128)"
              strokeWidth={1.5}
              animate={{ r: [6, 16], opacity: [0.8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <text
              y={-12}
              textAnchor="middle"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: 12,
                fontWeight: 600,
                fill: "oklch(0.97 0.005 170)",
                pointerEvents: "none",
              }}
            >
              {c.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {hovered && (
        <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-border bg-ink/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
          {hovered}
          {LIVE_NAMES.has(hovered) && (
            <span className="ml-2 inline-flex items-center gap-1 text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Live
            </span>
          )}
        </div>
      )}
    </div>
  );
}
