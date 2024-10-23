import SiteLayout from "@/app/site/page";
import RecentSites from "@/app/recentsites";

const HomePage = () => {
  return (
    <main>
      <SiteLayout />
      <RecentSites />
    </main>
  );
};

export default HomePage;
