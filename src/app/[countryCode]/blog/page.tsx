import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { blogPosts } from "@lib/data/blog-posts"
import { Epilogue, Outfit, Mansalva } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })

export default function BlogPage() {
  const featured = blogPosts.slice(0, 3)

  return (
    <main className="relative overflow-hidden bg-[#f3f4f6] pt-14 pb-18 lg:pt-18 lg:pb-22">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[8%] h-[130px] w-[400px] rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[6%] top-[10%] h-[140px] w-[340px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute left-[18%] bottom-[8%] h-[100px] w-[400px] rounded-full bg-white/35 blur-3xl" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1320px]">

          {/* Page heading */}
          <div className="max-w-[680px]">
            <p className={`${mansalva.className} mb-3 text-[22px] text-[#e61e73]`}>
              Blog
            </p>

            <h1 className={`${epilogue.className} text-[36px] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#0e2547] sm:text-[48px] lg:text-[62px]`}>
              <span className="relative inline-block">
                News & stuff
                <span className="absolute bottom-[6px] left-0 -z-10 h-[13px] w-[58%] bg-[#ef6a99]" />
              </span>
            </h1>

            <p className={`${outfit.className} mt-5 max-w-[620px] text-[16px] leading-8 text-slate-500`}>
              Thoughts, strategy, and practical insights on creative systems,
              performance content, and brand growth.
            </p>
          </div>

          {/* Cards grid */}
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((item) => (
              <article key={item.slug} className="group">

                {/* Image block */}
                <LocalizedClientLink href={`/blog/${item.slug}`} className="block">
                  <div className="relative">
                    <div className="pointer-events-none absolute -top-5 right-7 z-20">
                      <svg
                        width="72"
                        height="48"
                        viewBox="0 0 82 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-90"
                      >
                        <path
                          d="M8 44C14 20 14 8 14 2M24 46C30 24 30 11 30 4M40 48C46 26 46 13 46 6M56 48C62 28 62 16 62 10M72 46C76 30 76 20 76 14"
                          stroke="#e61e73"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)]">
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
                </LocalizedClientLink>

                {/* Card content */}
                <div className="mt-6">
                  <div className="flex items-center gap-4">
                    <p className={`${mansalva.className} text-[18px] text-[#e61e73]`}>
                      {item.category}
                    </p>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <p className={`${outfit.className} text-[13px] font-semibold uppercase tracking-[0.04em] text-slate-400`}>
                      {item.date}
                    </p>
                  </div>

                  <h2 className={`${epilogue.className} mt-3 text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2547] lg:text-[30px]`}>
                    <LocalizedClientLink
                      href={`/blog/${item.slug}`}
                      className="transition-colors hover:text-[#e61e73]"
                    >
                      {item.title}
                    </LocalizedClientLink>
                  </h2>

                  <p className={`${outfit.className} mt-3 text-[15px] leading-[1.85] text-slate-500`}>
                    {item.excerpt}
                  </p>

                  <LocalizedClientLink
                    href={`/blog/${item.slug}`}
                    className={`${epilogue.className} mt-5 inline-flex items-center text-[13px] font-extrabold uppercase tracking-[0.04em] text-[#0e2547] transition-colors hover:text-[#e61e73]`}
                  >
                    Read Article
                    <span className="ml-1.5 text-[16px] leading-none">›</span>
                  </LocalizedClientLink>
                </div>

              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}