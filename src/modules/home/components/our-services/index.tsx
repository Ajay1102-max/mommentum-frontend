import Link from "next/link"
import { Epilogue, Outfit } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })

const glist = [
  "Product photography",
  "Video ads",
  "UGC content",
  "Reels + motion graphics",
  "Shoot planning",
]

const golist = [
  "Meta Ads",
  "Google Ads",
  "Funnels",
  "Retargeting",
  "Creative testing",
]

const gllist = [
  "Brand strategy",
  "Analytics",
  "Conversion optimization",
  "Retention systems",
  "Growth roadmap",
]

const services = [
  {
    label: "Creative",
    title: "Creative Production",
    description:
      "We create content engineered to convert and strengthen your brand.",
    points: glist,
  },
  {
    label: "Marketing",
    title: "Performance Marketing",
    description:
      "Profit-focused ad systems designed to scale across the right channels.",
    points: golist,
  },
  {
    label: "Growth",
    title: "Growth Enablement",
    description:
      "The strategic backbone that keeps your brand growing with clarity.",
    points: gllist,
  },
]

export default function OurServices() {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 lg:py-20"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      {/* soft brush background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* heading brush */}
        <div className="absolute left-1/2 top-[8%] h-[110px] w-[560px] -translate-x-1/2 rounded-[999px] bg-[#f3f4f6] blur-2xl opacity-90" />
        <div className="absolute left-1/2 top-[11%] h-[90px] w-[430px] -translate-x-1/2 rounded-[999px] bg-[#f5f5f5] blur-2xl opacity-90" />

        {/* right abstract brush */}
        <div className="absolute right-[8%] top-[43%] h-[250px] w-[250px] rounded-full bg-[#f4f4f4] blur-2xl opacity-70" />

        {/* lower subtle brush */}
        <div className="absolute left-[22%] bottom-[12%] h-[110px] w-[420px] rounded-[999px] bg-[#f7f7f7] blur-2xl opacity-60" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        {/* heading */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="mb-3 flex items-center justify-center gap-1.5 text-[22px] text-[#f5c400] lg:text-[28px]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <h2 className={`${epilogue.className} text-[34px] font-extrabold tracking-[-0.06em] text-[#0e2547] sm:text-[42px] lg:text-[64px]`}>
            <span className="relative inline-block leading-none">
              Our Services
              <span className="absolute bottom-[6px] left-1/2 -z-10 h-[14px] w-[62%] -translate-x-1/2 bg-[#99dcf8]" />
            </span>
          </h2>

          <p className={`${outfit.className} mx-auto mt-5 max-w-[980px] text-[16px] leading-8 text-slate-500 lg:text-[18px]`}>
            Everything your D2C brand needs to grow predictably and profitably.
          </p>
        </div>

        {/* service columns */}
        <div className="mx-auto mt-16 grid max-w-[1320px] gap-12 md:grid-cols-3 md:gap-10">
          {services.map((service) => (
            <div key={service.title} className="relative text-left">
              {/* handwritten blue label */}
               {/* handwritten blue label */}
      <p className={`${outfit.className} mb-4 text-[24px] font-bold leading-none text-[#61baf7]`}>
        {service.label}
      </p>


              {/* title */}
               <h3 className={`${epilogue.className} max-w-[390px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#0e2547] lg:text-[34px]`}>
        {service.title}
      </h3>

              {/* description */}
            <p className={`${outfit.className} mt-5 max-w-[400px] text-[15px] leading-8 text-slate-500 lg:text-[16px]`}>
        {service.description}
      </p>

              {/* blue chips */}
               <div className="mt-5 flex max-w-[420px] flex-wrap gap-2.5">
        {service.points.map((point, index) => (
          <span
            key={index}
            className={`${outfit.className} inline-flex rounded-[10px] border border-[#cfeefd] bg-[#f3fbff] px-3 py-1.5 text-[13px] font-medium leading-6 text-[#4f89a8] shadow-[0_2px_8px_rgba(15,23,42,0.04)]`}
          >
            {point}
          </span>
        ))}
      </div>

              {/* learn more */}
             <Link
        href="/services"
        className={`${epilogue.className} group relative mt-8 inline-flex items-center text-[16px] font-extrabold uppercase tracking-[-0.02em] text-[#0e2547]`}
      >
        <span className="relative z-10">Learn More</span>
       <span className="absolute left-1/2 top-1/2 -z-0 h-[42px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#99dcf8] transition-colors duration-300 group-hover:border-[#ef3a6b]" />
      </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}