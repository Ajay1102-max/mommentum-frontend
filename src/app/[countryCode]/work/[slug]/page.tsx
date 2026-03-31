import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { caseStudies } from "@lib/data/case-studies"

type Props = {
  params: {
    countryCode: string
    slug: string
  }
}


export function generateStaticParams() {
  return caseStudies.map((item) => ({
    slug: item.slug,
  }))
}


export default function CaseStudyDetailPage({ params }: Props) {

  const { slug, countryCode } = params

  const study = caseStudies.find(
    (item) => item.slug === slug
  )

  if (!study) return notFound()


  return (
    <main
      className="relative overflow-hidden bg-[#f3f4f6] pt-14 pb-20 lg:pt-20 lg:pb-24"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >

      {/* BG */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-[10%] h-[140px] w-[420px] rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-[140px] w-[360px] rounded-full bg-white/35 blur-3xl" />
        <div className="absolute left-[18%] bottom-[10%] h-[120px] w-[420px] rounded-full bg-white/35 blur-3xl" />
      </div>


      <div className="content-container relative px-4 sm:px-6 lg:px-10">

        <div className="mx-auto max-w-[1320px]">

          {/* BACK */}

          <Link
            href={`/${countryCode}/work`}
            className="inline-flex items-center text-[15px] font-semibold text-slate-500 hover:text-[#0e2547]"
          >
            ← Back to Work
          </Link>


          {/* HEADER */}

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">

            <div>

              <p className="text-[22px] font-bold text-[#e61e73]">
                {study.category}
              </p>

              <h1 className="mt-4 text-[42px] font-extrabold text-[#0e2547] sm:text-[58px] lg:text-[80px]">
                {study.title}
              </h1>

              {study.about && (
                <p className="mt-6 text-[18px] text-slate-500">
                  {study.about}
                </p>
              )}


              <div className="mt-8">

                <h2 className="text-[24px] font-extrabold">
                  Challenge
                </h2>

                <p className="mt-4 text-slate-500">
                  {study.challenge}
                </p>

              </div>

            </div>


            {/* RESULTS */}

            <div className="rounded-[20px] bg-white p-7 shadow">

              <h2 className="text-[24px] font-extrabold">
                Results
              </h2>

              <ul className="mt-5 space-y-4">

                {study.results.map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-slate-500"
                  >
                    <span className="mt-[10px] h-2.5 w-2.5 rounded-full bg-[#99dcf8]" />
                    <span>{item}</span>
                  </li>

                ))}

              </ul>

            </div>

          </div>


          {/* IMAGE */}

          <div className="mt-12">

            <div className="overflow-hidden bg-white shadow">

              <div className="relative aspect-[16/9] w-full">

                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>


          {/* WHAT WE DID */}

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[20px] bg-white p-8 shadow">

              <h3 className="text-[28px] font-extrabold">
                What We Did
              </h3>

              <ul className="mt-5 space-y-4">

                {study.whatWeDid.map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-slate-500"
                  >
                    <span className="mt-[11px] h-2.5 w-2.5 rounded-full bg-[#ef6a99]" />
                    <span>{item}</span>
                  </li>

                ))}

              </ul>

            </div>


            <div className="rounded-[20px] bg-white p-8 shadow">

              <h3 className="text-[28px] font-extrabold">
                Strategy Overview
              </h3>

              <p className="mt-5 text-slate-500">
                {study.solution || study.overview}
              </p>

            </div>

          </div>


          {/* BUTTON */}

          <div className="mt-14 flex justify-center">

            <Link
              href={`/${countryCode}/work`}
              className="inline-flex h-[60px] items-center justify-center rounded-[16px] bg-[#e61e73] px-9 text-[15px] font-extrabold uppercase text-white hover:bg-[#ca155f]"
            >
              View More Work →
            </Link>

          </div>

        </div>
      </div>
    </main>
  )
}