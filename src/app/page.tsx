import {
  Avatar,
  Bio,
  Menu,
  ListOfExperiences,
  TechnicalSkills,
} from "@/components";
import ClientWrapper from "@/components/ClientWrapper";

function HomeContent({
  activeItem,
  handleClick,
}: {
  activeItem?: string;
  handleClick?: (item: string) => void;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl gap-12 px-6 py-12 md:gap-16">
      <aside className="hidden w-48 shrink-0 md:block">
        <div className="sticky top-24">
          <Avatar />
          <div className="mt-8">
            <Menu activeItem={activeItem} handleClick={handleClick} />
          </div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 space-y-16 pb-24">
        <div className="md:hidden">
          <Avatar />
        </div>
        <Bio />
        <ListOfExperiences />
        <TechnicalSkills />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <ClientWrapper>
      <HomeContent />
    </ClientWrapper>
  );
}
