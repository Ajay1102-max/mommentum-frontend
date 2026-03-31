"use client"

import { useEffect, useRef, useState } from "react"

export default function StatsStrip() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: "+8",
      label: "Years of experience",
      color: "text-[#d42cf0]",
      line: "bg-[#c58cf7]",
      delay: "delay-0",
    },
    {
      number: "+60",
      label: "Completed projects",
      color: "text-[#ef3a6b]",
      line: "bg-[#e6678e]",
      delay: "delay-200",
    },
    {
      number: "+90",
      label: "Agency members",
      color: "text-[#55b8f5]",
      line: "bg-[#9bdcf8]",
      delay: "delay-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3f4f6] pt-28 pb-20 md:pt-40 md:pb-24"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <div className="content-container px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="relative overflow-hidden rounded-[10px] bg-white px-6 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:px-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
            {/* soft paint brush effect */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
              <div className="relative h-[220px] w-[78%] max-w-[760px]">
                <div className="absolute left-[4%] top-[18%] h-[58px] w-[56%] rounded-[999px] bg-[#f2f2f2] blur-[12px]" />
                <div className="absolute left-[18%] top-[30%] h-[64px] w-[62%] rounded-[999px] bg-[#efefef] blur-[14px]" />
                <div className="absolute left-[10%] top-[45%] h-[60px] w-[70%] rounded-[999px] bg-[#f3f3f3] blur-[13px]" />
                <div className="absolute left-[26%] top-[58%] h-[54px] w-[52%] rounded-[999px] bg-[#f0f0f0] blur-[12px]" />
              </div>
            </div>

            <div className="relative grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
              {stats.map((item) => (
                <div key={item.label} className="flex justify-center md:justify-start">
                  <div className="w-full max-w-[290px]">
                    <div className="flex items-end gap-3">
                      <span
                        className={`text-[52px] font-extrabold leading-none tracking-[-0.05em] ${item.color} sm:text-[60px] lg:text-[64px]`}
                      >
                        {item.number}
                      </span>

                      <span className="max-w-[130px] pb-1 text-left text-[17px] font-semibold leading-[1.35] text-slate-500 sm:text-[18px]">
                        {item.label}
                      </span>
                    </div>

                    <div className="mt-5 h-[10px] w-[200px] overflow-hidden sm:w-[220px] lg:w-[250px]">
                      <div
                        className={`h-full ${item.line} transition-all duration-700 ease-out ${item.delay} ${
                          isVisible ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}