import { fetchExternalLinks } from "@/app/actions";
import { BannerSmall } from "@/components/BannerSmall";
import { ExternalLink } from "@/components/ExternalLink";
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
            subTitle="Utvalgte veiledere, dokumenter og kunnskapskilder"
          />
          <div className="grid grid-cols-1 gap-1.5 p-2 md:grid-cols-2 md:gap-3 md:pb-3 lg:grid-cols-3">
            {externalLinks.map((externalLink) => (
              <ExternalLink
                key={externalLink._id}
                title={externalLink.title}
                url={externalLink.url}
                description={externalLink.description}
                organization={externalLink.organization}
              />
            ))}
          </div>
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
