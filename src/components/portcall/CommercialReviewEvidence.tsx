import { useState } from "react";
import { AlertTriangle, ChevronRight, ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type MilestoneEmail = {
  subject: string;
  sender: string;
  recipient: string;
  time: string;
  before: string;
  quote: string;
  after: string;
};

type Milestone = {
  id: string;
  date: string;
  title: string;
  detail: string;
  disputed?: boolean;
  voyage: string;
  emails: MilestoneEmail[];
};

const milestones: Milestone[] = [
  {
    id: "fixture",
    date: "04 JUN",
    title: "Fixture agreed",
    detail: "Terms & charterparty",
    voyage: "VOY-024 · Rotterdam → Santos",
    emails: [
      {
        subject: "Fixture recap — MV Aurora / Rotterdam–Santos",
        sender: "Chartering desk",
        recipient: "Owner's commercial team",
        time: "04 JUN · 16:20 UTC",
        before: "Further to today's negotiations, we are pleased to confirm the fixture on the following main terms: ",
        quote: "vessel MV Aurora, 34,000 MT grain, Rotterdam to Santos, laycan 10–14 June, demurrage USD 18,500 PDPR.",
        after: " Full charterparty to follow for signature. Please confirm receipt and any comments by close of business.",
      },
      {
        subject: "RE: Fixture recap — charterparty for signature",
        sender: "Owner's commercial team",
        recipient: "Chartering desk",
        time: "05 JUN · 08:47 UTC",
        before: "Thank you for the recap. We confirm the main terms as stated. ",
        quote: "Please note clause 12 (laytime exceptions) is amended as per our previous correspondence.",
        after: " Signed charterparty attached for your records.",
      },
    ],
  },
  {
    id: "nor",
    date: "11 JUN",
    title: "NOR tendered",
    detail: "Arrival & port events",
    disputed: true,
    voyage: "VOY-024 · Rotterdam → Santos",
    emails: [
      {
        subject: "NOR tendered — MV Aurora / Rotterdam",
        sender: "Port agent, Rotterdam",
        recipient: "Owner's operations desk",
        time: "11 JUN · 06:05 UTC",
        before: "Please be advised that MV Aurora arrived at Rotterdam anchorage and ",
        quote: "Notice of Readiness was tendered at 06:00 UTC on 11 June, vessel in all respects ready to load.",
        after: " Berth prospects currently estimated 12 June PM. We will keep you updated.",
      },
      {
        subject: "RE: NOR tendered — validity protested",
        sender: "Charterer's operations desk",
        recipient: "Owner's operations desk",
        time: "11 JUN · 14:32 UTC",
        before: "We refer to the NOR tendered this morning. ",
        quote: "We protest the validity of this NOR: the vessel was not at the agreed berth and free pratique had not been granted at the time of tendering.",
        after: " Laytime cannot commence on the basis of this notice. We reserve all rights under the charterparty.",
      },
      {
        subject: "RE: NOR tendered — owner's position",
        sender: "Owner's operations desk",
        recipient: "Charterer's operations desk",
        time: "12 JUN · 09:18 UTC",
        before: "We note your protest. The charterparty provides for NOR on arrival at the customary anchorage, and ",
        quote: "free pratique was obtained by radio at 05:40 UTC, prior to tendering, as evidenced by the attached agent confirmation.",
        after: " We therefore maintain that the NOR is valid and laytime commenced at 06:00 UTC. Supporting documents attached.",
      },
    ],
  },
  {
    id: "discharge",
    date: "17 JUN",
    title: "Discharge complete",
    detail: "SOF & operational record",
    voyage: "VOY-024 · Rotterdam → Santos",
    emails: [
      {
        subject: "Discharge completed — final SOF attached",
        sender: "Port agent, Santos",
        recipient: "Owner's operations desk",
        time: "17 JUN · 22:10 UTC",
        before: "Discharge of all cargo was completed at 21:35 UTC on 17 June. ",
        quote: "Final Statement of Facts is attached, signed by all parties without remark.",
        after: " Vessel sailed at 23:05 UTC. Please confirm receipt.",
      },
      {
        subject: "RE: Discharge completed / laytime documentation",
        sender: "Operations desk",
        recipient: "Commercial team",
        time: "18 JUN · 09:42 UTC",
        before: "Discharge is complete and the final SOF is attached. ",
        quote: "The laytime statement is still to be prepared and sent to charterers.",
        after: " Please confirm once the supporting documents have been submitted.",
      },
    ],
  },
  {
    id: "followup",
    date: "18 JUN",
    title: "Commercial follow-up",
    detail: "Positions & outstanding items",
    voyage: "VOY-024 · Rotterdam → Santos",
    emails: [
      {
        subject: "RE: Demurrage calculation / rate confirmation",
        sender: "Chartering desk",
        recipient: "Operations desk",
        time: "23 JUN · 14:08 UTC",
        before: "We have reviewed the calculation received. ",
        quote: "Please confirm the applicable demurrage rate; this remains outstanding in the correspondence.",
        after: " We will revert on the statement once the rate has been confirmed.",
      },
      {
        subject: "RE: Laytime exception / charterparty wording",
        sender: "Commercial team",
        recipient: "Charterer's operations desk",
        time: "05 JUL · 11:16 UTC",
        before: "Further to your comments on the exception period, ",
        quote: "we accept your proposed deduction for this statement.",
        after: " Please send the revised calculation for our records.",
      },
    ],
  },
];

export function CommercialReviewEvidence() {
  const [openId, setOpenId] = useState<string>("nor");
  const selected = milestones.find((m) => m.id === openId) ?? milestones[0];

  return (
    <div className="overflow-hidden rounded-lg border border-navy/15 bg-background text-navy" aria-label="Illustrative voyage commercial review">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 bg-cloud px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-teal" />Voyage Workspace <ChevronRight className="size-3 text-navy/40" /><span className="font-mono text-xs">2026&nbsp;REVIEW</span></div>
        <span className="font-mono text-[10px] uppercase text-navy/50">Illustrative example · not client data</span>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.5fr]">
        <div className="border-b border-navy/10 p-5 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase text-navy/50">The voyage timeline</p>
          <h3 className="mt-3 text-lg font-semibold">From fixture to final position.</h3>
          <p className="mt-2 text-[11px] text-navy/55">Open a milestone to read the correspondence behind it.</p>
          <ol className="mt-6 space-y-0">
            {milestones.map((m, i) => {
              const isOpen = m.id === openId;
              return (
                <li key={m.id} className="relative flex gap-3 pb-4 last:pb-0">
                  {i < milestones.length - 1 && <span className="absolute bottom-0 left-[4px] top-3 w-px bg-navy/15" />}
                  <span className={`relative mt-4 size-[9px] shrink-0 rounded-full ${m.disputed ? "bg-red-500" : isOpen ? "bg-teal" : "bg-navy/25"}`} />
                  <Button
                    variant="ghost"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : m.id)}
                    className={`h-auto w-full items-start justify-start whitespace-normal rounded-md border p-3 text-left hover:bg-teal/10 ${
                      m.disputed
                        ? "border-red-500/60 bg-red-500/5"
                        : isOpen
                          ? "border-teal/50 bg-teal/10"
                          : "border-navy/10 bg-background"
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[9px] text-navy/50">{m.date}</span>
                        {m.disputed && (
                          <span className="flex items-center gap-1 font-mono text-[9px] uppercase text-red-600"><AlertTriangle className="size-3" /> Disputed</span>
                        )}
                      </span>
                      <span className="mt-1 block text-xs font-semibold">{m.title}</span>
                      <span className="mt-1 block text-[11px] text-navy/55">{m.detail}</span>
                      <span className="mt-2 flex items-center gap-1 text-[10px] text-navy/60">
                        {m.emails.length} emails <ChevronDown className={`size-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </span>
                    </span>
                  </Button>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 flex items-center gap-2 text-[10px] leading-relaxed text-navy/55"><ShieldCheck className="size-3.5 shrink-0" /> Every finding checked by a claims specialist.</p>
        </div>
        <div className="min-w-0 p-5" aria-live="polite">
          {openId ? (
            <>
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase text-navy/50">Correspondence · {selected.title}</p>
                {selected.disputed && (
                  <span className="flex items-center gap-1 rounded-full border border-red-500/50 bg-red-500/10 px-2 py-0.5 font-mono text-[9px] uppercase text-red-600"><AlertTriangle className="size-3" /> Disputed item</span>
                )}
              </div>
              <p className="mt-2 font-mono text-[9px] text-navy/50">{selected.voyage}</p>
              <div className={`mt-4 space-y-3 ${selected.disputed ? "rounded-md border border-red-500/40 bg-red-500/[0.03] p-3" : ""}`}>
                {selected.emails.map((email) => (
                  <article key={email.subject + email.time} className="rounded-md border border-navy/10 bg-background p-4">
                    <h4 className="flex items-start gap-2 text-sm font-semibold leading-relaxed"><Mail className="mt-1 size-4 shrink-0 text-navy/40" />{email.subject}</h4>
                    <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[10px] leading-relaxed">
                      <dt className="text-navy/45">From</dt><dd>{email.sender}</dd>
                      <dt className="text-navy/45">To</dt><dd>{email.recipient}</dd>
                      <dt className="text-navy/45">Sent</dt><dd className="font-mono">{email.time}</dd>
                    </dl>
                    <p className="mt-4 border-t border-navy/10 pt-4 text-xs leading-7 text-navy/70">
                      {email.before}
                      <mark className={`rounded-sm px-0.5 text-navy ${selected.disputed ? "bg-red-500/15" : "bg-teal/20"}`}>{email.quote}</mark>
                      {email.after}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p className="py-10 text-sm text-navy/50">Select a milestone to read the correspondence behind it.</p>
          )}
        </div>
      </div>
    </div>
  );
}
