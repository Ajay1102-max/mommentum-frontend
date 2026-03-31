"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Code2,
  PenTool,
  ShoppingCart,
  Cog,
  Eye,
  GitBranch,
  MessageSquare,
  Search,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Epilogue, Outfit } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })

const skills = [
  { title: "SEO/SEM/PPC", Icon: Search },
  { title: "Web Design", Icon: PenTool },
  { title: "Development", Icon: Code2 },
  { title: "E-commerce", Icon: ShoppingCart },
  { title: "Prototyping", Icon: Cog },
  { title: "Visual Design", Icon: Eye },
  { title: "Wireframing", Icon: GitBranch },
  { title: "User Research", Icon: MessageSquare },
]

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 lg:py-20"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <div className="content-container relative lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left */}
          <div className="max-w-[760px]">
       <p className={`${outfit.className} text-[20px] font-bold tracking-[-0.03em] text-[#49d7a4] lg:text-[26px]`}>
  Creative Web Solutions
</p>


            <div className="mt-3 inline-block">
             <h2 className={`${epilogue.className} text-[42px] font-extrabold leading-none tracking-[-0.05em] text-[#0e2547] lg:text-[58px]`}>
  Who we are
</h2>

              <div className="mt-2 h-[10px] w-[180px] overflow-hidden bg-transparent lg:w-[220px]">
                <div
                  className={`h-full bg-[#49d7a4] transition-all duration-700 ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>

           <p className={`${outfit.className} mt-6 max-w-[640px] text-[16px] leading-8 text-slate-500 lg:text-[18px]`}>
  We are a digital marketing and SEO agency dedicated to helping
  businesses develop their online presence and really grow.
</p>

           <h3 className={`${epilogue.className} mt-10 text-[28px] font-extrabold tracking-[-0.04em] text-[#0e2547] lg:text-[36px]`}>
  Check out our skills:
</h3>


            <div className="mt-7 grid grid-cols-2 gap-y-7 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map(({ title, Icon }) => (
                <div key={title} className="flex flex-col items-start gap-3">
                  <div className="text-[#0e2547]">
                    <Icon className="h-[34px] w-[34px]" strokeWidth={2.2} />
                  </div>
                  <p className="text-[15px] font-bold text-[#0e2547] lg:text-[17px]">
                    {title}
                  </p>
                </div>
              ))}
            </div>

           <Link
  href="/about"
  className={`${outfit.className} mt-10 inline-flex items-center rounded-[16px] bg-[#49d7a4] px-7 py-4 text-[16px] font-bold text-white transition hover:opacity-90`}
>
  MORE ABOUT US
  <span className="ml-3 text-[22px]">›</span>
</Link>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[520px] w-full max-w-[560px]">
              {/* shadow blob */}
              <div className="absolute left-[16%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#d9d9d9]/35 blur-[2px]" />

              {/* outer ring */}
              <div className="absolute left-[18%] top-[12%] h-[430px] w-[430px] rounded-full border-[3px] border-[#d8d8d8]" />

              {/* green circle */}
              <div className="absolute left-[20%] top-[14%] h-[390px] w-[390px] rounded-full bg-[#49d7a4]" />

              {/* image */}
              <div className="absolute inset-0 z-10 flex items-end justify-center">
                <Image
                  src="/who-we-are-person.png"
                  alt="Who we are"
                  width={430}
                  height={620}
                  className="h-auto w-[430px] object-contain"
                />
              </div>

              {/* doodles */}
              <div className="absolute left-[4%] bottom-[20%] z-20 rotate-[-10deg] text-[64px] leading-none text-sky-400">
                ≋
              </div>

              <div className="absolute right-[2%] bottom-[10%] z-20 rotate-[18deg] text-[64px] leading-none text-rose-300">
                ≋
              </div>

              <div className="absolute left-[8%] top-[34%] z-20 rotate-[-10deg] text-[56px] font-bold tracking-[-0.08em] text-rose-400">
                GOALS
              </div>

              <div className="absolute right-[8%] top-[34%] z-20 rotate-[18deg] text-[96px] text-violet-500">
                ↘
              </div>

              <div className="absolute right-[16%] top-[10%] z-20 text-[60px] text-[#386edc]">
                ⌂
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}