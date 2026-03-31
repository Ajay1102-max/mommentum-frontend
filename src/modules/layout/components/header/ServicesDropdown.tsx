"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const leftServices = [
  { name: "Branding & visual design", link: "/services/branding-visual-design" },
  { name: "E-commerce development", link: "/services/ecommerce-development" },
  { name: "Software as a service", link: "/services/software-as-a-service" },
  { name: "UX / UI design", link: "/services/ux-ui-design" },
  { name: "Web design & development", link: "/services/web-design-development" },
  { name: "WordPress web design", link: "/services/wordpress-web-design" },
]

const rightServices = [
  { name: "Search engine optimization", link: "/services/search-engine-optimization" },
  { name: "Content & copywriting", link: "/services/content-copywriting" },
  { name: "Email marketing", link: "/services/email-marketing" },
  { name: "Pay per click management", link: "/services/pay-per-click-management" },
  { name: "Social media marketing", link: "/services/social-media-marketing" },
  { name: "Strategy & consulting", link: "/services/strategy-consulting" },
]

export default function ServicesDropdown() {
  return (
    <div className="invisible absolute right-0 top-full z-50 mt-4 w-[620px] rounded-[22px] border border-neutral-200 bg-white p-7 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="mb-5">
        <LocalizedClientLink
          href="/services"
          className="inline-flex rounded-[14px] bg-[#f6f7f8] px-4 py-3 text-[13px] font-extrabold uppercase tracking-[0.03em] text-[#0e2547] transition hover:bg-[#eef0f2]"
        >
          View all services
        </LocalizedClientLink>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <h3 className="mb-3 text-[20px] font-extrabold tracking-[-0.03em] text-[#0e2547]">
            Web Design & Development
          </h3>

          <p className="mb-5 text-[15px] leading-7 text-neutral-500">
            Modern websites, premium storefronts, and digital experiences built
            for clarity, usability, and conversion.
          </p>

          <div className="space-y-1.5">
            {leftServices.map((item) => (
              <LocalizedClientLink
                key={item.name}
                href={item.link}
                className="block rounded-[12px] px-3 py-2.5 text-[15px] font-medium text-neutral-700 transition hover:bg-rose-50 hover:text-rose-600"
              >
                {item.name}
              </LocalizedClientLink>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h3 className="mb-3 text-[20px] font-extrabold tracking-[-0.03em] text-[#0e2547]">
            Digital Marketing
          </h3>

          <p className="mb-5 text-[15px] leading-7 text-neutral-500">
            Growth systems built around visibility, messaging, paid performance,
            and stronger brand communication.
          </p>

          <div className="space-y-1.5">
            {rightServices.map((item) => (
              <LocalizedClientLink
                key={item.name}
                href={item.link}
                className="block rounded-[12px] px-3 py-2.5 text-[15px] font-medium text-neutral-700 transition hover:bg-rose-50 hover:text-rose-600"
              >
                {item.name}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}