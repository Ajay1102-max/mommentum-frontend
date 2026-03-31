import Image from "next/image"
import { notFound } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { blogPosts } from "@lib/data/blog-posts"
import { Epilogue, Outfit, Mansalva } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: ["700", "800"] })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] })
const mansalva = Mansalva({ subsets: ["latin"], weight: ["400"] })

type Props = {
  params: Promise<{
    slug: string
    countryCode: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage(props: Props) {
  const params = await props.params
  const post = blogPosts.find((item) => item.slug === params.slug)

  if (!post) return notFound()

  return (
    <main className="relative overflow-hidden bg-[#f3f4f6] pt-14 pb-18 lg:pt-18 lg:pb-22">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-[10%] h-[130px] w-[400px] rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-[130px] w-[340px] rounded-full bg-white/35 blur-3xl" />
      </div>

      <div className="content-container relative px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1000px]">

          {/* Back link */}
          <LocalizedClientLink
            href="/blog"
            className={`${outfit.className} inline-flex items-center text-[14px] font-semibold text-slate-500 transition-colors hover:text-[#0e2547]`}
          >
            ← Back to Blog
          </LocalizedClientLink>

          {/* Post header */}
          <div className="mt-7">
            <div className="flex items-center gap-4">
              <p className={`${mansalva.className} text-[20px] text-[#e61e73]`}>
                {post.category}
              </p>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <p className={`${outfit.className} text-[13px] font-semibold uppercase tracking-[0.04em] text-slate-400`}>
                {post.date}
              </p>
            </div>

            <h1 className={`${epilogue.className} mt-4 max-w-[860px] text-[34px] font-extrabold leading-[0.97] tracking-[-0.05em] text-[#0e2547] sm:text-[46px] lg:text-[58px]`}>
              {post.title}
            </h1>
          </div>

          {/* Cover image */}
          <div className="mt-10 overflow-hidden rounded-[20px] bg-white shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Article body */}
          <article className="mt-10">

            {/* Intro card */}
            <div className="rounded-[20px] bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] lg:p-10">
              <p className={`${outfit.className} text-[16px] leading-[1.95] text-slate-500`}>
                {post.content.intro}
              </p>
            </div>

            {/* Section cards */}
            <div className="mt-5 space-y-5">
              {post.content.sections.map((section, index) => (
                <div
                  key={section.heading}
                  className={`rounded-[20px] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] lg:p-10 ${
                    index % 3 === 0
                      ? "bg-white"
                      : index % 3 === 1
                      ? "bg-[#fdf3f7]"
                      : "bg-[#f0f9ff]"
                  }`}
                >
                  {/* section number + heading */}
                  <div className="flex items-start gap-4">
                    <span className={`${epilogue.className} mt-1 shrink-0 text-[13px] font-extrabold text-[#99dcf8]`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={`${epilogue.className} text-[22px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2547] lg:text-[26px]`}>
                      {section.heading}
                    </h2>
                  </div>

                  <p className={`${outfit.className} mt-4 text-[15px] leading-[1.95] text-slate-500`}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

          </article>

          {/* Bottom CTA */}
          <div className="mt-12 overflow-hidden rounded-[20px] bg-[#0e2547] p-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.12)] lg:p-10">
            <p className={`${mansalva.className} text-[18px] text-[#ef6a99]`}>
              Want to read more?
            </p>
            <h3 className={`${epilogue.className} mt-2 text-[26px] font-extrabold tracking-[-0.04em] text-white lg:text-[32px]`}>
              Explore all our articles
            </h3>
            <p className={`${outfit.className} mx-auto mt-3 max-w-[480px] text-[14px] leading-7 text-white/65`}>
              Strategy, creative thinking, and growth insights — all in one place.
            </p>
            <div className="mt-7">
              <LocalizedClientLink
                href="/blog"
                className={`${epilogue.className} inline-flex h-[50px] items-center justify-center rounded-[12px] bg-[#e61e73] px-8 text-[14px] font-extrabold uppercase tracking-[0.03em] text-white transition-all duration-300 hover:bg-[#ca155f]`}
              >
                View More Articles
                <span className="ml-2.5 text-[18px] leading-none">›</span>
              </LocalizedClientLink>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}