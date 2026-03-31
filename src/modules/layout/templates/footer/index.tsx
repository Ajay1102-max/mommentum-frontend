import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const companyLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
]

const serviceLinks = [
  { name: "UX/UI design", href: "/services" },
  { name: "Branding", href: "/services" },
  { name: "Copywriting", href: "/services" },
  { name: "E-commerce", href: "/services" },
  { name: "Web design", href: "/services" },
]

const articleLinks = [
  {
    name: "How great creative improves D2C conversion performance",
    href: "/blog",
  },
  {
    name: "What makes a high-converting ecommerce landing page",
    href: "/blog",
  },
  {
    name: "How brands scale faster with creative systems",
    href: "/blog",
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-[#f3f4f6]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[90px] w-[340px] -translate-x-1/2 rounded-full bg-white/50 blur-2xl" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px] py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[180px_220px_260px_minmax(360px,1fr)] lg:gap-x-12">
            {/* column 1 */}
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] object-contain"
                />
              </Link>

              <div className="mt-6 flex flex-col gap-4">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[16px] font-medium text-slate-500 transition-colors duration-300 hover:text-[#0e2547]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* column 2 */}
            <div>
              <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-[#0e2547]">
                Services
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[16px] font-medium text-slate-500 transition-colors duration-300 hover:text-[#e11d74]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* column 3 */}
            <div>
              <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-[#0e2547]">
                Articles
              </h3>

              <div className="mt-6 flex flex-col gap-6">
                {articleLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block max-w-[250px] text-[16px] leading-[1.45] text-slate-500 transition-colors duration-300 hover:text-[#0e2547]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* column 4 */}
            <div className="lg:justify-self-end lg:w-full lg:max-w-[460px]">
              <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-[#0e2547]">
                Subscribe
              </h3>

              <form className="mt-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-[56px] w-full rounded-[16px] border border-slate-200 bg-white px-5 text-[16px] text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#99dcf8] focus:ring-2 focus:ring-[#99dcf8]/30"
                />

                <button
                  type="submit"
                  className="mt-4 flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#e11d74] text-[15px] font-extrabold uppercase tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#c81666]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#eef0f2]">
        <div className="content-container px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[760px] text-[14px] leading-[1.5] text-slate-500 lg:text-[15px]">
              © 2026 Mommantum. All rights reserved. Built for modern brands
              that want premium design and strong performance.
            </p>

            <div className="flex items-center gap-5 text-slate-500">
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-[#0e2547]"
              >
                <Instagram size={19} strokeWidth={2.1} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-colors duration-300 hover:text-[#0e2547]"
              >
                <Linkedin size={19} strokeWidth={2.1} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="transition-colors duration-300 hover:text-[#0e2547]"
              >
                <Twitter size={19} strokeWidth={2.1} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}