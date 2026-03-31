import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { services } from "@lib/data/services"
import { Epilogue, Outfit, Mansalva } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#f3f4f6] pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-[140px] w-[420px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute right-[8%] top-[16%] h-[150px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="absolute left-[18%] bottom-[10%] h-[120px] w-[400px] rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[860px]">
            <p className={`${mansalva.className} mb-4 text-[24px] font-bold text-[#e61e73]`}>
              Our Services
            </p>

            <h1 className={`${epilogue.className} text-[42px] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#0e2547] sm:text-[56px] lg:text-[76px]`}>
              <span className="relative inline-block">
                Services designed to build stronger brands and sharper growth systems.
                <span className="absolute bottom-[8px] left-0 -z-10 h-[15px] w-[38%] bg-[#ef6a99]" />
              </span>
            </h1>

            <p className={`${outfit.className} mt-6 max-w-[780px] text-[18px] leading-9 text-slate-500`}>
              From UX/UI and websites to SEO, content, strategy, and paid growth, our services are built to improve communication, performance, and long-term brand momentum. We keep the work clear, premium, and aligned with business outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <article
                key={item.slug}
                className="group rounded-[24px] bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <p className={`${mansalva.className} text-[22px] font-bold text-[#e61e73]`}>
                    {item.shortLabel}
                  </p>
                  <span className={`${epilogue.className} text-[18px] font-extrabold text-[#99dcf8]`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className={`${epilogue.className} mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0e2547]`}>
                  {item.title}
                </h2>

                <p className={`${outfit.className} mt-4 text-[17px] leading-8 text-slate-500`}>
                  {item.description}
                </p>

                <p className={`${outfit.className} mt-5 text-[15px] leading-8 text-slate-500`}>
                  {item.intro.slice(0, 165)}...
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className={`${epilogue.className} text-[13px] font-bold uppercase tracking-[0.05em] text-[#0e2547]`}>
                    Includes
                  </p>

                  <ul className="mt-3 space-y-2">
                    {item.points.slice(0, 4).map((point) => (
                      <li
                        key={point}
                        className={`${outfit.className} flex items-start gap-3 text-[15px] leading-7 text-slate-500`}
                      >
                        <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#99dcf8]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <LocalizedClientLink
                    href={`/services/${item.slug}`}
                    className={`${epilogue.className} inline-flex items-center text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#0e2547] transition-colors hover:text-[#e61e73]`}
                  >
                    Learn More
                    <span className="ml-2 text-[18px] leading-none">›</span>
                  </LocalizedClientLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}