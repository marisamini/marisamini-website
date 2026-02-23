import {
  Avatar,
  Bio,
  Menu,
  ListOfExperiences,
  TechnicalSkills,
} from "@/components";
import ConnectSidebar from "@/components/ConnectSidebar";
import ClientWrapper from "@/components/ClientWrapper";
import MobileNav from "@/components/MobileNav";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const dynamic = "force-dynamic";

function HomeContent({
  activeItem,
  handleClick,
}: {
  activeItem?: string;
  handleClick?: (item: string) => void;
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
        <div className="md:hidden">
          <Avatar />
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
      </main>
      <MobileNav />
    </div>
  );
}

export default async function Home() {
  return (
    <ClientWrapper>
      <HomeContent />
    </ClientWrapper>
  );
}
