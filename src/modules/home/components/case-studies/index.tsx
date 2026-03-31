import Image from "next/image"
import Link from "next/link"
import { caseStudies } from "@lib/data/case-studies"
import { Epilogue, Outfit, Mansalva } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })


export default function CaseStudies({
  countryCode,
}: {
  countryCode: string
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#f3f4f6] py-18 lg:py-24"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-[8%] h-[140px] w-[420px] rounded-full bg-white/50 blur-3xl" />
        <div className="absolute right-[6%] top-[12%] h-[160px] w-[360px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute left-[16%] bottom-[10%] h-[120px] w-[460px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute right-[12%] bottom-[20%] h-[130px] w-[380px] rounded-full bg-white/35 blur-3xl" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px]">

          {/* heading */}

          <div className="max-w-[560px]">

           <p className={`${mansalva.className} mb-5 text-[24px] font-bold leading-none text-[#e61e73] sm:text-[28px]`}>
  CASE STUDIES
</p>


            <h2 className={`${epilogue.className} text-[42px] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#0e2547] sm:text-[56px] lg:text-[72px]`}>
  <span className="relative inline-block">
    Real brands. Real growth.
    <span className="absolute bottom-[8px] left-0 -z-10 h-[15px] w-[68%] bg-[#ef6a99]" />
  </span>
</h2>

          </div>


          {/* cards */}

          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">

            {caseStudies.map((item) => (

              <article key={item.slug} className="group">

                <Link
                  href={`/${countryCode}/work/${item.slug}`}
                  className="block"
                >

                  <div className="relative">

                    <div className="pointer-events-none absolute -top-6 right-8 z-20">

                      <svg
                        width="82"
                        height="54"
                        viewBox="0 0 82 54"
                        fill="none"
                      >
                        <path
                          d="M8 44C14 20 14 8 14 2M24 46C30 24 30 11 30 4M40 48C46 26 46 13 46 6M56 48C62 28 62 16 62 10M72 46C76 30 76 20 76 14"
                          stroke="#e61e73"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>

                    </div>

                    <div className="overflow-hidden bg-white shadow-[0_22px_55px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]">

                      <div className="relative aspect-[1.05/1] w-full">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        />

                      </div>

                    </div>

                  </div>

                </Link>


                <div className="mt-8">

                 <p className={`${mansalva.className} text-[22px] font-bold leading-none text-[#e61e73]`}>
  {item.category}
</p>


                 <h3 className={`${epilogue.className} mt-4 text-[32px] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#0e2547] lg:text-[38px]`}>
  <Link href={`/${countryCode}/work/${item.slug}`}>
    {item.title}
  </Link>
</h3>


                  {item.about && (
                    <p className={`${outfit.className} mt-4 text-[17px] leading-8 text-slate-500`}>
  {item.about}
</p>

                  )}


                  <div className="mt-5">

                   <p className={`${epilogue.className} text-[15px] font-bold uppercase tracking-[0.04em] text-[#0e2547]`}>
  Results
</p>

                    <ul className="mt-3 space-y-2">

                      {item.results.slice(0, 3).map((result) => (

                        <li
                          key={result}
                          className="flex items-start gap-3 text-[16px] leading-7 text-slate-500"
                        >
                          <span className="mt-[10px] h-2.5 w-2.5 rounded-full bg-[#99dcf8]" />
                          <span>{result}</span>
                        </li>

                      ))}

                    </ul>

                  </div>


                  <Link
  href={`/${countryCode}/work/${item.slug}`}
  className={`${epilogue.className} mt-6 inline-flex items-center text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#0e2547] hover:text-[#e61e73]`}
>
  View Case Study
</Link>


                </div>

              </article>

            ))}

          </div>

        </div>
      </div>
    </section>
  )
}