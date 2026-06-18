export function VoyageWorkspace() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgba(7,26,43,0.25)] ring-1 ring-navy/5">
      <div className="flex items-center justify-between border-b border-navy/5 bg-navy/[0.02] px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full border border-red-400/40 bg-red-400/20" />
            <span className="size-2.5 rounded-full border border-amber-400/40 bg-amber-400/20" />
            <span className="size-2.5 rounded-full border border-emerald-400/40 bg-emerald-400/20" />
          </div>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-navy/40">
            WORKSPACE · VOY-7742 · M/T ATLANTIC STAR
          </span>
        </div>
        <span className="rounded bg-teal/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
          Sea Passage
        </span>
      </div>

      <div className="p-6">
        {/* Timeline */}
        <div className="mb-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-navy/10" />
            <div className="pc-draw-line absolute left-0 top-1/2 h-px w-[62%] -translate-y-1/2 bg-signal" />
            {[
              { label: "Load", state: "done" },
              { label: "NOR", state: "done" },
              { label: "Transit", state: "active" },
              { label: "Discharge", state: "pending" },
            ].map((n) => (
              <div key={n.label} className="relative flex flex-col items-center">
                <span
                  className={[
                    "z-10 size-3.5 rounded-full ring-4 ring-white",
                    n.state === "done" && "bg-navy",
                    n.state === "active" && "bg-signal pc-pulse-soft",
                    n.state === "pending" && "border border-navy/20 bg-white",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
                <span
                  className={`mt-2.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                    n.state === "pending" ? "text-navy/30" : "text-navy"
                  }`}
                >
                  {n.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Event log */}
        <div className="space-y-2.5">
          <EventRow
            color="teal"
            title="NOR tendered"
            meta="Capt. Aris · Berth 4"
            stamp="14:20 UTC"
            badge="Verified"
          />
          <EventRow
            color="red"
            title="Berthing delay due to crane failure"
            meta="Brokerage Ltd. · 412 MT IFO"
            stamp="09:41 UTC"
          />
          <EventRow
            color="navy"
            title="Statement of facts shared with charterer"
            meta="Auto-summary · 3 events"
            stamp="08:02 UTC"
          />
        </div>
      </div>
    </div>
  );
}

function EventRow({
  color,
  title,
  meta,
  stamp,
  badge,
}: {
  color: "teal" | "signal" | "navy";
  title: string;
  meta: string;
  stamp: string;
  badge?: string;
}) {
  const dot =
    color === "teal" ? "bg-teal" : color === "signal" ? "bg-signal" : "bg-navy/70";
  return (
    <div className="flex items-center justify-between rounded-lg border border-navy/5 bg-navy/[0.02] px-3.5 py-2.5">
      <div className="flex items-center gap-3">
        <span className={`size-2 rounded-full ${dot}`} />
        <div>
          <p className="text-xs font-semibold text-navy">{title}</p>
          <p className="text-[10.5px] text-navy/50">{meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge ? (
          <span className="rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-teal">
            {badge}
          </span>
        ) : null}
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy/40">
          {stamp}
        </span>
      </div>
    </div>
  );
}