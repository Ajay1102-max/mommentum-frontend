import Image from "next/image"
import StatsStrip from "@modules/home/components/stats-strip"
import CaseStudies from "@modules/home/components/case-studies"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Epilogue, Outfit, Mansalva } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })

export default async function AboutPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await props.params

  return (
    <main
      className="bg-[#f3f4f6]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[6%] top-[10%] h-[140px] w-[420px] rounded-full bg-[#f4f4f6] blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-[160px] w-[360px] rounded-full bg-[#f6f6f8] blur-3xl" />
          <div className="absolute left-[20%] bottom-[6%] h-[120px] w-[420px] rounded-full bg-[#f5f5f7] blur-3xl" />
        </div>

        <div className="content-container relative px-4 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_520px]">
            <div>
              <p className={`${mansalva.className} mb-5 text-[24px] font-bold leading-none text-[#e61e73] sm:text-[28px]`}>
              
                ABOUT US
              </p>

              <h1 className="max-w-[820px] text-[44px] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#0e2547] sm:text-[58px] lg:text-[80px]">
                <span className="relative inline-block">
                  We help brands grow
                  <span className="absolute bottom-[8px] left-0 -z-10 h-[14px] w-[64%] bg-[#ef6a99]" />
                </span>
                <br />
                with strategy, content,
                <br />
                and performance-led creative.
              </h1>

              <p className="mt-8 max-w-[760px] text-[17px] leading-9 text-slate-500 lg:text-[18px]">
                Momentum is a creative and performance-focused agency helping
                D2C brands, startups, and modern businesses scale through
                storytelling, ad creatives, and conversion-led systems. We care
                about work that not only looks strong, but also drives real
                business movement.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <LocalizedClientLink
                  href="/work"
                  className="inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#0e2547] px-8 text-[15px] font-extrabold uppercase tracking-[0.02em] text-white transition-all duration-300 hover:opacity-90"
                >
                  See Our Work
                  <span className="ml-3 text-[22px] leading-none">›</span>
                </LocalizedClientLink>

                <LocalizedClientLink
                  href="/contact"
                  className="relative inline-flex h-[58px] items-center justify-center px-2 text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#0e2547]"
                >
                  <span className="relative z-10">Let&apos;s Talk</span>
                  <span className="absolute left-1/2 top-1/2 -z-0 h-[46px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#4ad79f]" />
                </LocalizedClientLink>
              </div>
            </div>

           <div className="relative mx-auto w-full max-w-[520px]">
  {/* soft grey back shape */}
  <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[30%] bg-slate-200/35 blur-[1px]" />

  {/* pink-purple main shape */}
  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[28%] bg-gradient-to-br from-fuchsia-400 via-purple-400 to-pink-300 opacity-90 shadow-[0_20px_80px_rgba(236,72,153,0.28)]" />

  {/* light outline shape */}
  <div className="absolute left-1/2 top-1/2 h-[365px] w-[365px] -translate-x-1/2 -translate-y-1/2 rounded-[28%] border-[3px] border-[#d7d7e6]/70" />

             <div className="relative z-10 flex items-center justify-center">
    <div className="relative h-[320px] w-[320px]">
      <Image
        src="/about/about-hero.png"
        alt="About Momentum"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

              <div className="absolute left-[37%] top-[4%] z-20 text-[54px] leading-none text-rose-400 lg:text-[64px]">
                ♕
              </div>
              <div className="absolute right-[8%] top-[24%] z-20 text-[46px] leading-none text-green-400 lg:text-[60px]">
                ✦
              </div>
              <div className="absolute left-[4%] top-[48%] z-20 text-[58px] leading-none text-violet-400/90">
                ⌒
              </div>
              <div className="absolute right-[2%] bottom-[18%] z-20 rotate-[10deg] text-[58px] leading-none text-sky-400">
                ≋
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER / STORY ================= */}
      <section className="relative overflow-hidden bg-[#f3f4f6] py-16 lg:py-20">
        <div className="content-container px-4 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
            <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_22px_55px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5] w-full bg-[#eef0f2]">
                <Image
                  src="/about/kuldeep.jpg"
                  alt="Kuldeep Ahir"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-[0_22px_55px_rgba(0,0,0,0.08)] lg:p-12">
              <p
                className="text-[22px] font-bold leading-none text-[#ef3a6b]"
                style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}
              >
                Founder story
              </p>

              <h2 className="mt-4 text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#0e2547] lg:text-[56px]">
                The team behind your growth
              </h2>

              <p className="mt-8 text-[16px] font-bold uppercase tracking-[0.04em] text-[#e61e73]">
                Kuldeep Ahir — Creative Director
              </p>

              <p className="mt-4 max-w-[820px] text-[17px] leading-9 text-slate-500 lg:text-[18px]">
                Momentum is built around one clear belief: brands grow faster
                when creative, performance, and execution are aligned. Instead
                of treating content, ads, and strategy as separate things, we
                build systems where each piece supports the other.
              </p>

              <p className="mt-5 max-w-[820px] text-[17px] leading-9 text-slate-500 lg:text-[18px]">
                From D2C brands to local businesses and product-led companies,
                our work focuses on helping brands look sharper, communicate
                better, and convert more consistently. We are not here just to
                make content. We are here to build momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[15%] h-[120px] w-[300px] rounded-full bg-[#f5f5f7] blur-3xl" />
          <div className="absolute right-[10%] bottom-[12%] h-[140px] w-[340px] rounded-full bg-[#f6f6f8] blur-3xl" />
        </div>

        <div className="content-container relative px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <div className="max-w-[760px]">
              <p
                className="mb-4 text-[22px] font-bold text-[#ef3a6b]"
                style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}
              >
                What we believe
              </p>

              <h2 className="text-[38px] font-extrabold leading-[1] tracking-[-0.055em] text-[#0e2547] lg:text-[60px]">
                Growth comes from clarity, consistency, and creative systems.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-[22px] bg-[#f3f4f6] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div className="text-[34px] font-extrabold text-[#99dcf8]">
                  01
                </div>
                <h3 className="mt-4 text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2547]">
                  Strategy before content
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-slate-500">
                  We don’t create content for the sake of activity. Every piece
                  should support positioning, demand, and conversion.
                </p>
              </div>

              <div className="rounded-[22px] bg-[#f3f4f6] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div className="text-[34px] font-extrabold text-[#99dcf8]">
                  02
                </div>
                <h3 className="mt-4 text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2547]">
                  Creative that converts
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-slate-500">
                  Strong aesthetics matter, but performance matters more. We
                  build creative that feels premium and still moves results.
                </p>
              </div>

              <div className="rounded-[22px] bg-[#f3f4f6] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div className="text-[34px] font-extrabold text-[#99dcf8]">
                  03
                </div>
                <h3 className="mt-4 text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2547]">
                  Consistency compounds
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-slate-500">
                  Real growth rarely comes from one lucky campaign. It comes
                  from systems, repeated execution, and clear direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsStrip />

      {/* ================= CASE STUDIES ================= */}
      <CaseStudies countryCode={countryCode} />

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#0e2547] py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[18%] h-[140px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="content-container relative px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[920px] text-center">
            <p
              className="mb-4 text-[22px] font-bold text-[#ef6a99]"
              style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}
            >
              Let&apos;s build together
            </p>

            <h2 className="text-[38px] font-extrabold leading-[1] tracking-[-0.055em] text-white lg:text-[62px]">
              Let’s build your growth system
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-9 text-white/75 lg:text-[18px]">
              Creative, strategy, and performance should work together. That is
              where real growth starts.
            </p>

            <div className="mt-9">
              <LocalizedClientLink
                href="/contact"
                className="inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#ef3a6b] px-8 text-[15px] font-extrabold uppercase tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#d92d5d]"
              >
                Let&apos;s Talk
                <span className="ml-3 text-[22px] leading-none">›</span>
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}