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
import MobileNav from "@/components/MobileNav";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { fetchSiteData, fetchWeeklySummary } from "@/lib/data";

export const dynamic = "force-dynamic";

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
    <div className="mx-auto flex min-h-screen max-w-5xl gap-12 px-4 py-8 md:px-6 md:py-12 md:gap-16">
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-24">
          <Avatar />
          <div className="mt-8">
            <Menu activeItem={activeItem} handleClick={handleClick} />
          </div>
          <ConnectSidebar />
        </div>
      </aside>
      <main className="min-w-0 flex-1 space-y-14 md:space-y-16 pb-28 md:pb-24">
        <div className="md:hidden space-y-3">
          <Avatar />
          <p className="text-center text-sm text-emerald-400/90">
            Open to consulting, PM, AI/tech & sports tech opportunities
          </p>
        </div>
        <AnimateOnScroll>
          <Bio />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ListOfExperiences />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <TechnicalSkills />
        </AnimateOnScroll>
        <div className="md:hidden">
          <ConnectSidebar />
        </div>
        <AnimateOnScroll>
          <VisitorStats
            totalVisitors={totalVisitors}
            avgLoadTime={avgLoadTime}
            chartData={chartData}
          />
        </AnimateOnScroll>
      </main>
      <MobileNav />
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
