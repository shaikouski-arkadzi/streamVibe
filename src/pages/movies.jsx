import MoviesBanner from "@/sections/MoviesBanner"
import Collections from "@/sections/Collections"
import Banner from "@/sections/Banner"

export const metadata = {
  title: "Movies & Shows",
}

export default function () {
  return (
    <>
      <MoviesBanner />
      <Collections />
      <Banner />
    </>
  )
}
