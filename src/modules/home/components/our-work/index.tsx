import Link from "next/link"
import SectionHeading from "@modules/common/components/section-heading"

const caseStudies = [
  {
    id: "jalvayu",
    brand: "Jalvayu Wellness",
    category: "Eco-friendly D2C / Incense",
    challenge:
      "Strong product, but lacked high-performing creatives and consistent revenue.",
    whatWeDid: [
      "Created storytelling-led creative strategy",
      "Shot performance-focused content",
      "Built Meta conversion funnels",
      "Improved landing page clarity",
    ],
    results: ["2× revenue in 45 days", "28% lower CAC", "Multiple winning creatives"],
    accent: "rose",
  },
  {
    id: "electroglobal",
    brand: "ElectroGlobal",
    category: "Engineering / D2C",
    challenge: "Low visibility and weak inbound pipeline.",
    whatWeDid: [
      "Shot reels and product videos",
      "Built consistent content strategy",
      "Improved brand clarity",
      "Created better social storytelling",
    ],
    results: ["Higher inbound interest", "Better content consistency", "Stronger digital presence"],
    accent: "violet",
  },
  {
    id: "urbanvada",
    brand: "Urban Vada Pav",
    category: "QSR / F&B",
    challenge:
      "Strong offline presence, but needed digital visibility and flavour-focused content.",
    whatWeDid: [
      "Shot high-engagement reels",
      "Highlighted signature flavours",
      "Ran hyper-local Meta campaigns",
      "Improved social visibility",
    ],
    results: ["5× footfall growth", "Higher local awareness", "Better campaign traction"],
    accent: "sky",
  },
]

const accentStyles = {
  rose: {
    glow: "bg-rose-200/40",
    soft: "bg-rose-50",
    text: "text-rose-500",
    border: "border-rose-200/60",
  },
  violet: {
    glow: "bg-violet-200/40",
    soft: "bg-violet-50",
    text: "text-violet-500",
    border: "border-violet-200/60",
  },
  sky: {
    glow: "bg-sky-200/40",
    soft: "bg-sky-50",
    text: "text-sky-500",
    border: "border-sky-200/60",
  },
} as const

export default function OurWork() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-24 lg:py-28">
      <div className="absolute left-[8%] top-[12%] h-24 w-24 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute right-[8%] top-[16%] h-24 w-24 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute left-[6%] top-[30%] rotate-[-15deg] text-[54px] leading-none text-violet-400/70">
        ≈
      </div>
      <div className="absolute right-[8%] bottom-[20%] rotate-[12deg] text-[58px] leading-none text-sky-400/70">
        ≋
      </div>

      <div className="content-container relative lg:px-10">
        <SectionHeading
          title="Our"
          highlight="Work"
          subtitle="Case studies built on real strategy and measurable growth"
          desc="A closer look at how creative, performance, and positioning came together for real brands"
        />

        <div className="mt-16 space-y-10">
          {caseStudies.map((item, index) => {
            const accent = accentStyles[item.accent]
            const reverse = index % 2 === 1

            return (
              <div
                key={item.id}
                className={`grid items-stretch gap-6 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:grid-cols-12 lg:p-8 ${
                  reverse ? "" : ""
                }`}
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${accent.soft} ${accent.text} text-lg`}
                    >
                      ★
                    </span>
                    <h3 className="text-[28px] font-bold tracking-tight text-slate-900">
                      {item.brand}
                    </h3>
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">Category:</span>{" "}
                    {item.category}
                  </p>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">Challenge:</span>{" "}
                    {item.challenge}
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-[18px] font-semibold text-slate-900">
                        What We Did
                      </h4>
                      <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-600">
                        {item.whatWeDid.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-semibold text-slate-900">
                        Results
                      </h4>
                      <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-600">
                        {item.results.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/"
                    className="mt-7 inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-[15px] font-semibold text-slate-900 transition hover:border-rose-200 hover:text-rose-500"
                  >
                    View case study
                    <span className="ml-2">→</span>
                  </Link>
                </div>

                <div className={`relative lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div
                    className={`relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[24px] border ${accent.border} bg-gradient-to-br from-white to-slate-50 p-6`}
                  >
                    <div
                      className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${accent.glow} blur-3xl`}
                    />
                    <div className="absolute left-6 top-4 rotate-[-12deg] text-[44px] leading-none text-slate-300/70">
                      ≈
                    </div>

                    <div className="relative ml-auto w-fit rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-slate-700 shadow-sm">
                      Featured Case
                    </div>

                    <div className="relative mt-10">
                      <p className={`text-[14px] font-semibold uppercase tracking-[0.22em] ${accent.text}`}>
                        Growth Snapshot
                      </p>
                      <h4 className="mt-3 text-[34px] font-bold leading-tight text-slate-900">
                        {item.brand}
                      </h4>
                      <p className="mt-3 max-w-[280px] text-[15px] leading-7 text-slate-600">
                        A focused combination of positioning, content, and performance built around measurable business outcomes.
                      </p>
                    </div>

                    <div className="relative mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                        <p className="text-[12px] uppercase tracking-[0.2em] text-slate-400">
                          Focus
                        </p>
                        <p className="mt-2 text-[16px] font-semibold text-slate-900">
                          Strategy + Execution
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                        <p className="text-[12px] uppercase tracking-[0.2em] text-slate-400">
                          Outcome
                        </p>
                        <p className="mt-2 text-[16px] font-semibold text-slate-900">
                          Real Brand Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-rose-200 bg-white px-6 py-3 text-[15px] font-semibold text-slate-900 shadow-sm transition hover:text-rose-500"
          >
            More case studies
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}