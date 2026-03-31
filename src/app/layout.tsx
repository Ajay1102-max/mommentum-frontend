import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

const logoFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const bodyFont = DM_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <main>{props.children}</main>
      </body>
    </html>
  )
}