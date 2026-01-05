import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import "@/styles"

export default function ({ children, title }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe | {title}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
