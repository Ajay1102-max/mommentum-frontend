import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import WhyMommentum from "@modules/home/components/why-mommentum"
import WhoWeAre from "@modules/home/components/who-we-are"
import StatsStrip from "@modules/home/components/stats-strip"
import OurServices from "@modules/home/components/our-services"
import CaseStudies from "@modules/home/components/case-studies"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Momentum",
  description: "Growth studio",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!region) return null

  return (
    <>
      <Hero />
      <WhyMommentum />
      <WhoWeAre />
      <StatsStrip />
      <OurServices />

      {/* ✅ FIX */}
      <CaseStudies countryCode={countryCode} />

    </>
  )
}