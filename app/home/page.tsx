import Header from "@/components/Header"
import TypoGraphy from "@/components/Typography"
import TrendingPage from "../trending"
import RecentSites from './../recentsites/index';

const HomePage = () => {

  const description = "There's a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser. There's a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser."
  return (
    <main>
      <Header title="Astral Grid" />
      <section className="max-w-md">
        <TypoGraphy description={description} />
      </section>
      <TrendingPage />
      <RecentSites />
    </main>
  )
}

export default HomePage