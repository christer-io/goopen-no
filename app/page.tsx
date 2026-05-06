
import { Banner } from "@/components/Banner";
import Link from 'next/link';
import { SimpleCard } from "@/components/SimpleCard";
import { fetchAllPosts } from '@/app/actions';
import { fetchFAQ } from '@/app/actions';
import { fetchExternalLinks } from '@/app/actions';
import { SectionHeader } from "@/components/SectionHeader";
import { Header } from "@/components/Header";
import { ReadMore } from '@/components/ReadMore';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { BannerSmall } from '@/components/BannerSmall';
import { ExternalLink } from "@/components/ExternalLink";
import { ExploreCommunity } from "@/components/ExploreCommunity";
import { SoftwareCard } from "@/components/SoftwareCard";
import { softwareItems } from "@/data/software";

export default async function Home() {
  /* fetching data from serverside */
  const allPosts = await fetchAllPosts();
  const faq = await fetchFAQ();
  const externalLinks = await fetchExternalLinks();
  const introPinnedSlug = "introduksjon-apne-standarder";
  const allPostsOrdered = [
    ...allPosts.filter((post) => post.slug.current === introPinnedSlug),
    ...allPosts.filter((post) => post.slug.current !== introPinnedSlug),
  ];
  const frontpageFaq = faq.slice(0, 9);
  const frontpageExternalLinks = externalLinks.slice(0, 6);
  const featuredSoftwareOrder = ["android", "chromium", "flutter", "go", "kubernetes", "keycloak", "opensearch", "pytorch", "tensorflow", "blender"];
  const featuredSoftware = featuredSoftwareOrder
    .map((id) => softwareItems.find((software) => software.id === id))
    .filter((software): software is (typeof softwareItems)[number] => Boolean(software));
  

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       {/* main banner with slogan and sub text */}
       <div className=''>
        <div className="">
          <Header />
          <Banner buttonLeft="Les mer" buttonLeftUrl="/post/om-goopen-no" buttonRight="" buttonRightUrl=""  titlePart1="Åpne lisenser" titlePart2="er delingskultur!"/>
        </div>
        <div className='bg-white'>
       <div className="mx-auto bg-white max-w-7xl pb-7">
       
       {/* listing basic intro articles on Creative Commons */}
       <SectionHeader title="Introduksjon" subTitle="Kom igang med Åpen kildekode og Creative Commons"/>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                {allPostsOrdered.map((post, index) => (  
                    <Link key={post._id} href={`/post/${post.slug.current}`} className="block h-full">
                    <SimpleCard title={post.title} url="" description="" tag="" bg="bg-emerald-700" text="text-white" iconIndex={index}/>
                    </Link>
                ))}
          </div>
        </div>
        <div className="mx-auto bg-white ">
  
      {/*hero with CC logo with link to article on a book  */}
       <Hero title="Open Source Initiative" textPart2="Open Source Initiative(OSI) forvalter open source definition og listen med godkjente lisenser." buttonText="Lær mer" url="https://opensource.org" img="open-source-logo-svg-vector.svg" />  
       <div className=" max-w-full bg-white">
       
       {/* listing projects using CC */}
       {/* <SectionHeader title="Bruker CC" subTitle="Prosjekter som bruker Creatve Commons"/>
          <div className=" grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:pb-3 md:pt-2 mx-auto max-w-7xl"> 
                {story.map((post) => (  
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                      <ImgCard title={post.title} url={post.description} img={post.mainImage} description={post.description}/>
                    </Link>
                ))}
          </div>*/}
        </div>  
        {/* listing FAQ */}
        <div className="mx-auto bg-white max-w-7xl pb-7">
        <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Åpen kildekode og Creative Commons"/>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                  {frontpageFaq.map((faqa) => (  
                      <Link key={faqa._id} href={`/post/${faqa.slug.current}`} className="block h-full">
                      <SimpleCard title={faqa.title} url="" description="" tag="" bg="bg-white" text="text-emerald-950"/>
                      </Link>
                  ))}
            </div>
        </div>  
        <div className='pb-7'>
          <ReadMore title="Flere FAQs" url="/faq/" />
        </div>

        <div className="mx-auto bg-white max-w-7xl pb-7">
        <SectionHeader title="Utvalgt programvare" subTitle="Åpne verktøy og rammeverk du kan utforske videre"/>
          <div className="flex gap-3 overflow-x-auto px-2 pb-3 md:gap-4 md:pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-track]:bg-emerald-50">
                  {featuredSoftware.map((software) => (
                      <SoftwareCard key={software.id} software={software} />
                  ))}
            </div>
        </div>
        <div className='pb-7'>
          <ReadMore title="Utforsk mer programvare" url="/programvare/" />
        </div>
        
        <div className="mx-auto bg-white max-w-7xl pb-7">
        <SectionHeader title="Eksterne ressurser" subTitle="Utvalgte veiledere, dokumenter og kunnskapskilder"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                  {frontpageExternalLinks.map((externalLink) => (  
                      <ExternalLink
                        key={externalLink._id}
                        title={externalLink.title}
                        url={externalLink.url}
                        description={externalLink.description}
                        organization={externalLink.organization}
                        category={externalLink.category}
                      />
                  ))}
            </div>
        </div>  
        <div className='pb-7'>
          <ReadMore title="Flere eksterne ressurser" url="/eksterne-ressurser/" />
        </div>

          <ExploreCommunity />

          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling." />
        </div>          
        <Footer /> 
      </div>
      </div>
    </main>
  )
}
