"use client"

import { Epilogue, Outfit, Mansalva } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import GoogleFormContact from "@modules/contact/components/google-form-contact"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })

const stripText = "Get in touch with our team"

export default function ContactPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [underlineVisible, setUnderlineVisible] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUnderlineVisible(false)
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setUnderlineVisible(true))
          )
        } else {
          setUnderlineVisible(false)
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes drawUnderline {
          from { width: 0%; opacity: 0; }
          to   { width: 100%; opacity: 1; }
        }
        .underline-animate {
          display: block;
          height: 7px;
          border-radius: 999px;
          background: #a855f7;
          width: 0%;
          opacity: 0;
          margin: 3px auto 0;
        }
        .underline-animate.visible {
          animation: drawUnderline 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-white pt-14 pb-16 lg:pt-18 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[6%] top-[8%] h-[120px] w-[380px] rounded-full bg-[#f4f4f6] blur-3xl" />
          <div className="absolute right-[8%] top-[14%] h-[130px] w-[340px] rounded-full bg-[#f6f6f8] blur-3xl" />
          <div className="absolute right-[-4%] top-[5%] h-[360px] w-[360px] rounded-full border-[36px] border-slate-100 opacity-50" />
        </div>

        <div className="content-container relative px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1320px] text-center">
            <p className={`${mansalva.className} mb-3 text-[20px] text-[#e61e73]`}>
              Contact us
            </p>

            <h1
              ref={headingRef}
              className={`${epilogue.className} inline-block text-[38px] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0e2547] sm:text-[52px] lg:text-[64px]`}
            >
              We are Momentum!
              <span
                className={`underline-animate${underlineVisible ? " visible" : ""}`}
              />
            </h1>
          </div>
        </div>
      </section>

      {/* ===== MOVING STRIP ===== */}
      <div className="overflow-hidden bg-[#0e2547] py-4">
        <div className="marquee-inner">
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className={`${epilogue.className} mx-6 whitespace-nowrap text-[15px] font-extrabold uppercase tracking-[0.06em] text-white`}
            >
              {stripText}
              <span className="mx-6 text-[#ef6a99]">✦</span>
            </span>
          ))}
          {[...Array(16)].map((_, i) => (
            <span
              key={`b-${i}`}
              className={`${epilogue.className} mx-6 whitespace-nowrap text-[15px] font-extrabold uppercase tracking-[0.06em] text-white`}
            >
              {stripText}
              <span className="mx-6 text-[#ef6a99]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== MESSAGE US ===== */}
  <section className="relative overflow-hidden bg-[#f3f4f6] py-14 lg:py-18">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-[4%] top-[10%] h-[120px] w-[380px] rounded-full bg-white/50 blur-3xl" />
    <div className="absolute right-[6%] bottom-[10%] h-[110px] w-[340px] rounded-full bg-white/40 blur-3xl" />
  </div>

  <div className="content-container relative px-4 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-[1320px]">
      <div className="mx-auto max-w-[640px] text-center">
        <h2
          className={`${epilogue.className} text-[32px] font-extrabold tracking-[-0.05em] text-[#0e2547] sm:text-[42px] lg:text-[52px]`}
        >
          <span className="relative inline-block">
            Message us
            <span className="absolute bottom-[5px] left-0 -z-10 h-[11px] w-[58%] bg-[#ef6a99]" />
          </span>
        </h2>
      </div>

      <GoogleFormContact />
    </div>
  </div>
</section>

      {/* ===== GENERAL INQUIRIES + SOCIAL ===== */}
      <section className="relative overflow-hidden bg-[#f3f4f6] py-14 lg:py-18">
        <div className="content-container px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2
                  className={`${epilogue.className} text-[28px] font-extrabold tracking-[-0.05em] text-[#0e2547] lg:text-[38px]`}
                >
                  <span className="relative inline-block">
                    General Inquiries
                    <span className="absolute bottom-[4px] left-0 -z-10 h-[9px] w-[52%] bg-[#ef6a99]" />
                  </span>
                </h2>
                <p className={`${outfit.className} mt-4 text-[16px] text-slate-500`}>
                  hello@mommantum.com
                </p>
              </div>

              <div>
                <h2
                  className={`${epilogue.className} text-[28px] font-extrabold tracking-[-0.05em] text-[#0e2547] lg:text-[38px]`}
                >
                  <span className="relative inline-block">
                    Social Networks
                    <span className="absolute bottom-[4px] left-0 -z-10 h-[9px] w-[52%] bg-[#ef6a99]" />
                  </span>
                </h2>

                <div className="mt-4 flex items-center gap-4">
                  {(["IG", "in", "X", "▶"] as const).map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-slate-200 bg-white text-[16px] text-[#0e2547] shadow-sm transition-all duration-300 hover:border-[#e61e73] hover:text-[#e61e73]"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADQUARTERS ===== */}
      <section className="bg-white py-14 lg:py-18">
        <div className="content-container px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <div className="text-center">
              <p className={`${mansalva.className} text-[20px] text-[#e61e73]`}>
                Let&apos;s meet!
              </p>

              <h2
                className={`${epilogue.className} mt-1 inline-block text-[32px] font-extrabold tracking-[-0.05em] text-[#0e2547] lg:text-[48px]`}
              >
                <span className="relative inline-block">
                  Headquarters
                  <span className="absolute bottom-[5px] left-0 -z-10 h-[10px] w-[54%] bg-[#ef6a99]" />
                </span>
              </h2>

              <p className={`${outfit.className} mx-auto mt-3 text-[15px] text-slate-500`}>
                Jaipur, Rajasthan, India
              </p>
            </div>

           <div className="mt-8 overflow-hidden rounded-[22px] shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
  <iframe
    src="https://www.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&z=12&output=embed"
    width="100%"
    height="440"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Momentum Headquarters Map"
  />
</div>
          </div>
        </div>
      </section>
    </main>
  )
}