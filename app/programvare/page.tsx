import { BannerSmall } from "@/components/BannerSmall";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { SoftwareExplorer } from "@/components/SoftwareExplorer";
import { softwareItems } from "@/data/software";

export default function SoftwarePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col bg-white text-black">
      <div>
        <Header />

        <div className="mx-auto max-w-7xl bg-white pb-7 pt-10">
          <SectionHeader
            title="Programvare"
            subTitle="Utvalgt åpen programvare, verktøy og rammeverk"
          />
          <SoftwareExplorer software={softwareItems} />
        </div>

        <BannerSmall
          textPart1="Åpen programvare"
          textPart2="gjør teknologi"
          textPart3="lettere å bygge videre på."
        />
        <Footer />
      </div>
    </main>
  );
}
