"use client"

import Image from "next/image"
import { Chakra_Petch, Outfit } from "next/font/google"
import ServicesDropdown from "./ServicesDropdown"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const logoFont = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
})

const navFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const navLinkClass =
  "relative text-[15px] font-medium text-neutral-800 transition duration-200 hover:text-rose-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all after:duration-200 hover:after:w-full"

const disabledNavClass =
  "relative cursor-default text-[15px] font-medium text-neutral-400"

export default function NavBar() {
  return (
    <nav className="w-full bg-white">
      <div className="content-container lg:px-10">
        <div className="flex h-[88px] items-center justify-between">
          <LocalizedClientLink
            href="/"
            className="flex shrink-0 items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Momentum Logo"
              width={40}
              height={40}
              className="h-[40px] w-[40px] object-contain"
              priority
            />
            <span
              className={`${logoFont.className} text-[20px] leading-none tracking-[0.04em] text-black lg:text-[32px]`}
            >
              mommantum
            </span>
          </LocalizedClientLink>

          <div
            className={`${navFont.className} flex items-center gap-8 lg:gap-10`}
          >
            <div className="group relative">
  <LocalizedClientLink href="/services" className={navLinkClass}>
    Services
  </LocalizedClientLink>
  <ServicesDropdown />
</div>

            <LocalizedClientLink href="/about" className={navLinkClass}>
  About
</LocalizedClientLink>

            <LocalizedClientLink href="/work" className={navLinkClass}>
              Work
            </LocalizedClientLink>

            <LocalizedClientLink href="/blog" className={navLinkClass}>
  Blog
</LocalizedClientLink>
          </div>
        </div>
      </div>
    </nav>
  )
}