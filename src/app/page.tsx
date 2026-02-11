import {
  Avatar,
  Bio,
  Menu,
  ListOfExperiences,
  TechnicalSkills,
} from "@/components";
import ConnectSidebar from "@/components/ConnectSidebar";
import ClientWrapper from "@/components/ClientWrapper";
import VisitorStats from "@/components/VisitorStats";
import { fetchSiteData, fetchWeeklySummary } from "@/lib/data";

function HomeContent({
  activeItem,
  handleClick,
  totalVisitors = 0,
  avgLoadTime = null,
  chartData = [],
}: {
  activeItem?: string;
  handleClick?: (item: string) => void;
  totalVisitors?: number;
  avgLoadTime?: number | null;
  chartData?: { date: string; Visitors: number; AvgLoadTime: number }[];
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl gap-12 px-6 py-12 md:gap-16">
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-24">
          <Avatar />
          <div className="mt-8">
            <Menu activeItem={activeItem} handleClick={handleClick} />
          </div>
          <ConnectSidebar />
        </div>
      </aside>
      <main className="min-w-0 flex-1 space-y-16 pb-24">
        <div className="md:hidden">
          <Avatar />
        </div>
        <Bio />
        <ListOfExperiences />
        <TechnicalSkills />
        <div className="md:hidden">
          <ConnectSidebar />
        </div>
        <VisitorStats
          totalVisitors={totalVisitors}
          avgLoadTime={avgLoadTime}
          chartData={chartData}
        />
      </main>
    </div>
  );
}

export default async function Home() {
  const [siteData, chartData] = await Promise.all([
    fetchSiteData(),
    fetchWeeklySummary(),
  ]);

  return (
    <ClientWrapper
      totalVisitors={siteData.totalVisitors}
      avgLoadTime={siteData.avgLoadTime}
      chartData={chartData}
    >
      <HomeContent />
    </ClientWrapper>
  );
}
