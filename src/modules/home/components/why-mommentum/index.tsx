"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  WandSparkles,
  TrendingUp,
  Users,
  Clock3,
  Eye,
} from "lucide-react"
import { Epilogue, Outfit } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500"] })

const topItems = [
  {
    Icon: WandSparkles,
    accent: "sky",
    title: "Growth Alignment",
    text: "Growth works when everything moves together. Most agencies focus on ads or creatives. We focus on alignment — strategy, content, and performance working as one system.",
  },
  {
    Icon: TrendingUp,
    accent: "pink",
    title: "Outcomes That Matter",
    text: "We improve the metrics that grow revenue — lower CAC, higher ROAS, stronger retention, better conversion rates, and more consistent revenue.",
  },
  {
    Icon: Users,
    accent: "green",
    title: "A Skilled, D2C-Focused Team",
    text: "Access performance marketers, strategists, creative directors, and content producers — all under one roof, working together for predictable growth.",
  },
] as const

const bottomItems = [
  {
    Icon: Clock3,
    accent: "violet",
    title: "Predictable Execution",
    text: "Clear timelines, clear reports, and clear next steps. We keep execution transparent, structured, and easy to trust.",
  },
  {
    Icon: Eye,
    accent: "pink",
    title: "Total Transparency",
    text: "No hidden costs. No jargon. Just honest communication, visible progress, and aligned execution from start to finish.",
  },
] as const

const accentStyles = {
  sky:    { icon: "text-[#163b67]", scribble: "text-sky-300" },
  pink:   { icon: "text-[#163b67]", scribble: "text-pink-300" },
  green:  { icon: "text-[#163b67]", scribble: "text-emerald-300" },
  violet: { icon: "text-[#163b67]", scribble: "text-violet-300" },
} as const

function FeatureItem({
  Icon,
  title,
  text,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  text: string
  accent: keyof typeof accentStyles
}) {
  const styles = accentStyles[accent]

  return (
    <div className="text-center">
      <div className="relative mx-auto mb-5 flex h-[92px] items-center justify-center">
        <div className={`absolute rotate-[-16deg] text-[58px] leading-none ${styles.scribble}`}>
          ≋
        </div>
        <div className={`relative z-10 ${styles.icon}`}>
          <Icon strokeWidth={2.25} className="h-[54px] w-[54px]" />
        </div>
      </div>

      <h3 className={`${epilogue.className} text-[22px] font-extrabold tracking-[-0.03em] text-[#0e2547] lg:text-[24px]`}>
        {title}
      </h3>

      <p className={`${outfit.className} mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.85] text-slate-500 lg:text-[16px]`}>
        {text}
      </p>
    </div>
  )
}

export default function WhyMomentum() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [underlineVisible, setUnderlineVisible] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset then re-trigger so it animates every time section enters view
          setUnderlineVisible(false)
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setUnderlineVisible(true))
          })
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
    <section className="relative overflow-hidden bg-[#f3f4f6] py-16 lg:py-20">
      <style>{`
        @keyframes drawUnderline {
  from { width: 0%; opacity: 0; }
  to   { width: 100%; opacity: 1; }
}
.underline-animate {
  display: block;
  height: 14px;
  border-radius: 0px;
  background: #a855f7;
  width: 0%;
  opacity: 0;
  margin: 2px auto 0;   /* was 6px — tighter to the text */
}
.underline-animate.visible {
  animation: drawUnderline 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
      `}</style>

      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[-2%] top-[36%] h-[70px] w-[360px] rounded-[999px] bg-white/45 blur-2xl" />
        <div className="absolute left-[15%] top-[24%] h-[84px] w-[420px] rounded-[999px] bg-white/40 blur-2xl" />
        <div className="absolute left-[34%] top-[13%] h-[92px] w-[520px] rounded-[999px] bg-white/35 blur-2xl" />
        <div className="absolute right-[8%] top-[26%] h-[86px] w-[420px] rounded-[999px] bg-white/35 blur-2xl" />
        <div className="absolute right-[-4%] top-[42%] h-[80px] w-[340px] rounded-[999px] bg-white/35 blur-2xl" />
        <div className="absolute left-[6%] bottom-[22%] h-[80px] w-[380px] rounded-[999px] bg-white/35 blur-2xl" />
        <div className="absolute left-[32%] bottom-[12%] h-[72px] w-[440px] rounded-[999px] bg-white/30 blur-2xl" />
        <div className="absolute right-[12%] bottom-[14%] h-[76px] w-[360px] rounded-[999px] bg-white/30 blur-2xl" />
      </div>

      <div className="content-container relative lg:px-10">
        <div className="mx-auto max-w-[980px] text-center">

         <h2
  ref={headingRef}
  className={`${epilogue.className} inline-block text-[44px] font-extrabold tracking-[-0.04em] text-[#0e2547] lg:text-[56px]`}
>
  Why Momentum?
  <span className={`underline-animate${underlineVisible ? " visible" : ""}`} />
</h2>

          <p className={`${outfit.className} mx-auto mt-5 max-w-[700px] text-[17px] leading-8 text-slate-500 lg:text-[18px]`}>
            Because predictable D2C growth requires alignment — and that&apos;s what we deliver.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1320px] gap-x-10 gap-y-12 md:grid-cols-3">
          {topItems.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-[920px] gap-x-12 gap-y-12 md:grid-cols-2">
          {bottomItems.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}