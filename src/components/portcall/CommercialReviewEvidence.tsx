import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const findings = [
  {
    id: "statement",
    title: "Laytime statement never sent",
    category: "Never raised",
    voyage: "VOY-024 · Rotterdam → Santos",
    subject: "RE: Discharge completed / laytime documentation",
    sender: "Operations desk",
    recipient: "Commercial team",
    time: "18 JUN · 09:42 UTC",
    before: "Discharge is complete and the final SOF is attached. ",
    quote: "The laytime statement is still to be prepared and sent to charterers.",
    after: " Please confirm once the supporting documents have been submitted.",
    note: "No subsequent submission was found in the reviewed correspondence. Confirm against records held outside these mailboxes.",
  },
  {
    id: "rate",
    title: "Demurrage rate never declared",
    category: "Still open",
    voyage: "VOY-031 · Antwerp → Alexandria",
    subject: "RE: Demurrage calculation / rate confirmation",
    sender: "Chartering desk",
    recipient: "Operations desk",
    time: "23 JUL · 14:08 UTC",
    before: "We have reviewed the calculation received. ",
    quote: "Please confirm the applicable demurrage rate; this remains outstanding in the correspondence.",
    after: " We will revert on the statement once the rate has been confirmed.",
    note: "The reviewed email chain contains a request for the rate, but no later confirmation. The commercial position requires verification.",
  },
  {
    id: "clause",
    title: "A clause conceded in correspondence",
    category: "Conceded",
    voyage: "VOY-042 · Singapore → Fujairah",
    subject: "RE: Laytime exception / charterparty wording",
    sender: "Commercial team",
    recipient: "Charterer's operations desk",
    time: "05 SEP · 11:16 UTC",
    before: "Further to your comments on the exception period, ",
    quote: "we accept your proposed deduction for this statement.",
    after: " Please send the revised calculation for our records.",
    note: "A concession appears in the email record. A claims specialist checks its treatment against the governing clause; settled matters stay settled.",
  },
] as const;

export function CommercialReviewEvidence() {
  const [selected, setSelected] = useState<(typeof findings)[number]>(findings[0]);
  const [emailOpen, setEmailOpen] = useState(true);

  return (
    <div className="overflow-hidden rounded-lg border border-navy/15 bg-background text-navy" aria-label="Illustrative voyage commercial review">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 bg-cloud px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-teal" /> Voyage record <ChevronRight className="size-3 text-navy/40" /><span className="font-mono text-xs">2025 REVIEW</span></div>
        <span className="font-mono text-[10px] uppercase text-navy/50">Illustrative example · not client data</span>
      </div>
      <div className="grid lg:grid-cols-[0.8fr_1fr_1.35fr]">
        <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase text-navy/50">The voyage timeline</p>
          <h3 className="mt-3 text-lg font-semibold">From fixture to final position.</h3>
          <ol className="mt-6 space-y-0">
            {[
              ["04 JUN", "Fixture agreed", "Terms & charterparty"],
              ["11 JUN", "NOR tendered", "Arrival & port events"],
              ["17 JUN", "Discharge complete", "SOF & operational record"],
              ["18 JUN", "Commercial follow-up", "Positions & outstanding items"],
            ].map(([date, title, detail], i) => (
              <li key={title} className="relative flex gap-3 pb-5 last:pb-0">
                {i < 3 && <span className="absolute bottom-0 left-[4px] top-3 w-px bg-navy/15" />}
                <span className={`relative mt-1 size-[9px] shrink-0 rounded-full ${i === 3 ? "bg-teal" : "bg-navy/25"}`} />
                <div><p className="font-mono text-[9px] text-navy/50">{date}</p><p className="mt-1 text-xs font-semibold">{title}</p><p className="mt-1 text-[11px] text-navy/55">{detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase text-navy/50">Findings & supporting evidence</p>
          <div className="mt-4 space-y-2">
            {findings.map((finding) => (
              <Button key={finding.id} variant="ghost" aria-pressed={selected.id === finding.id} onClick={() => { setSelected(finding); setEmailOpen(true); }} className={`h-auto w-full items-start justify-start whitespace-normal rounded-md border p-3 text-left hover:bg-teal/10 ${selected.id === finding.id ? "border-teal/50 bg-teal/10" : "border-navy/10 bg-background"}`}>
                <FileText className="mt-0.5 text-navy/50" />
                <span className="min-w-0 flex-1"><span className="block font-mono text-[9px] uppercase text-navy/55">{finding.category}</span><span className="mt-1 block text-xs font-semibold leading-relaxed">{finding.title}</span><span className="mt-2 flex items-center gap-1 text-[10px] text-navy/60">Source email <ArrowUpRight className="size-3" /></span></span>
              </Button>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-[10px] leading-relaxed text-navy/55"><ShieldCheck className="size-3.5 shrink-0" /> Every finding checked by a claims specialist.</p>
        </div>
        <div className="min-w-0 p-5" aria-live="polite">
          <div className="flex items-center justify-between gap-3"><p className="font-mono text-[10px] uppercase text-navy/50">The email behind the finding</p><Button size="icon" variant="ghost" aria-label={emailOpen ? "Collapse source email" : "Expand source email"} aria-expanded={emailOpen} onClick={() => setEmailOpen(!emailOpen)} className="size-7 text-navy/60"><ArrowDown className={emailOpen ? "rotate-180" : ""} /></Button></div>
          {emailOpen ? <div className="mt-4">
            <p className="font-mono text-[9px] text-navy/50">{selected.voyage}</p>
            <h4 className="mt-3 flex items-start gap-2 text-sm font-semibold leading-relaxed"><Mail className="mt-1 size-4 shrink-0 text-navy/40" />{selected.subject}</h4>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[10px] leading-relaxed"><dt className="text-navy/45">From</dt><dd>{selected.sender}</dd><dt className="text-navy/45">To</dt><dd>{selected.recipient}</dd><dt className="text-navy/45">Sent</dt><dd className="font-mono">{selected.time}</dd></dl>
            <p className="mt-5 border-t border-navy/10 pt-5 text-xs leading-7 text-navy/70">{selected.before}<mark className="rounded-sm bg-teal/20 px-0.5 text-navy">{selected.quote}</mark>{selected.after}</p>
            <div className="mt-5 border-l-2 border-teal pl-3"><p className="flex items-center gap-1 text-[10px] font-semibold"><Check className="size-3" /> Review note</p><p className="mt-1 text-[11px] leading-relaxed text-navy/60">{selected.note}</p></div>
          </div> : <p className="py-10 text-sm text-navy/50">Source email collapsed.</p>}
        </div>
      </div>
    </div>
  );
}