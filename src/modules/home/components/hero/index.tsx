"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Epilogue, Mansalva, Outfit } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500"] })

const words = ["faster,", "predictable,", "profitable"]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState(words[0])
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = useMemo(() => words[wordIndex], [wordIndex])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          const nextText = isDeleting
            ? currentWord.slice(0, displayedText.length - 1)
            : currentWord.slice(0, displayedText.length + 1)
          setDisplayedText(nextText)
        },
        isDeleting ? 55 : 90
      )
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWord])

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-14 lg:pb-20">
      <style>{`
        .scribble {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .scribble:hover {
          transform: scale(1.2) rotate(6deg);
          opacity: 0.8;
        }

        .lets-talk-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #0e2547;
          text-decoration: none;
        }
        .lets-talk-btn .oval {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 48px;
          border-radius: 9999px;
          border: 4px solid #4ad79f;
          transition: all 0.3s ease;
          z-index: 0;
        }
        .lets-talk-btn:hover .oval {
          width: 138px;
          height: 56px;
          opacity: 0.7;
        }
        .lets-talk-btn span.label {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="content-container relative lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">

          {/* LEFT VISUAL */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[720px]">

              {/* background shapes */}
              <div className="absolute left-[8%] top-[14%] h-[74%] w-[78%] rounded-[28%] bg-slate-200/35" />

              <div
                className="absolute left-[13%] top-[18%] h-[68%] w-[72%] rounded-[24%]"
                style={{
                  background:
                    "linear-gradient(135deg, #c026d3 0%, #9333ea 45%, #a855f7 100%)",
                }}
              />

              <div className="absolute left-[12%] top-[17%] h-[70%] w-[74%] rounded-[24%] border-[3px] border-[#d7d7e6]/70" />

              {/* 👉 BIGGER IMAGE */}
              <div className="relative z-10 flex justify-center pt-2">
                <Image
                  src="/hero-girl.png"
                  alt="Creative design hero"
                  width={700}
                  height={880}
                  priority
                  className="h-auto w-[95%] max-w-[620px] object-contain"
                />
              </div>

              {/* 👉 SCRIBBLES WITH HOVER */}
              <div className="scribble absolute left-[39%] top-[7%] z-20 text-[60px] text-rose-400">
                ♕
              </div>
              <div className="scribble absolute right-[15%] top-[24%] z-20 text-[60px] text-green-400">
                💡
              </div>
              <div className="scribble absolute left-[4%] top-[46%] z-20 text-[64px] text-violet-400">
                ⌒
              </div>
              <div className="scribble absolute right-[2%] bottom-[20%] z-20 text-[70px] text-sky-400">
                ≋
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[760px]">

            <p className={`${mansalva.className} mb-4 text-[22px] font-bold text-[#ef3a6b]`}>
              Growing a D2C brand is challenging
            </p>

            {/* 👉 UPDATED HEADING */}
            <h1 className={`${epilogue.className} text-[#0e2547] leading-[1.05]`}>
              
              <span className="block text-[52px] font-bold sm:text-[60px] lg:text-[76px] xl:text-[84px]">
                We make it{" "}
                <span className="inline-block w-[13ch]">
                  {displayedText}
                  <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-[#0e2547]" />
                </span>
              </span>

              <span className="relative block text-[52px] font-bold sm:text-[60px] lg:text-[76px] xl:text-[84px]">
                and scalable
                <span className="absolute left-0 bottom-[6px] -z-10 h-[10px] w-[40%] bg-[#ef5b87]" />
              </span>

            </h1>

            <p className={`${outfit.className} mt-7 text-[16px] leading-[2] text-slate-500 lg:text-[18px]`}>
              We simplify growth for modern brands by combining strategy, design,
              and performance into a system that actually works. No random efforts,
              only structured growth.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-8">
              <Link
                href="/"
                className={`${epilogue.className} rounded-[18px] bg-[#0e2547] px-8 py-5 text-[18px] font-extrabold text-white`}
              >
                Get Started →
              </Link>

              <Link href="/contact" className="lets-talk-btn">
                <span className="label">Let&apos;s Talk</span>
                <span className="oval" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}