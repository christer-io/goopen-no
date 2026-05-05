import { fetchExternalLinks } from "@/app/actions";
import { BannerSmall } from "@/components/BannerSmall";
import { ExternalResourcesExplorer } from "@/components/ExternalResourcesExplorer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";

export default async function ExternalResources() {
  const externalLinks = await fetchExternalLinks();

  return (
    <main className="mx-auto flex min-h-screen flex-col bg-white text-black">
      <div>
        <Header />

        <div className="mx-auto max-w-7xl bg-white pb-7 pt-10">
          <SectionHeader
            title="Eksterne ressurser"
            subTitle="Utvalgte organisasjoner, veiledere og kunnskapskilder"
          />
          <ExternalResourcesExplorer externalLinks={externalLinks} />
        </div>

        <BannerSmall
          textPart1="Åpne ressurser"
          textPart2="gjør kunnskap"
          textPart3="lettere å finne."
        />
        <Footer />
      </div>
    </main>
  );
}
