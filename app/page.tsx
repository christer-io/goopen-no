
import { Banner } from "@/components/Banner";
import Link from 'next/link';
import { SimpleCard } from "@/components/SimpleCard";
import { fetchPosts } from '@/app/actions';
import { fetchAllPosts } from '@/app/actions';
import { fetchFAQ } from '@/app/actions';
import { fetchStory } from '@/app/actions';
import { fetchLicense } from '@/app/actions';
import { fetchExternalLinks } from '@/app/actions';
import { SectionHeader } from "@/components/SectionHeader";
import { Header } from "@/components/Header";
import { ReadMore } from '@/components/ReadMore';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { BannerSmall } from '@/components/BannerSmall';
import { ImgCard } from "@/components/ImgCard";
import { ExternalLink } from "@/components/ExternalLink";

export default async function Home() {
  /* fetching data from serverside */
  const posts = await fetchPosts();
  const allPosts = await fetchAllPosts();
  const faq = await fetchFAQ();
  const story = await fetchStory();
  const licenses = await fetchLicense();
  const externalLinks = await fetchExternalLinks();
  

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       {/* main banner with slogan and sub text */}
       <div className=''>
        <div className="">
          <Header />
          <Banner buttonLeft="Lær mer" buttonLeftUrl="/post/apen-kildekode" buttonRight="" buttonRightUrl=""  titlePart1="Åpne lisenser" titlePart2="er delingskultur!"/>
        </div>
        <div className='bg-white'>
       <div className="mx-auto bg-white max-w-7xl pb-7">
       
       {/* listing basic intro articles on Creative Commons */}
       <SectionHeader title="Introduksjon" subTitle="Kom igang med Åpen kildekode og Creative Commons"/>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                {allPosts.map((post) => (  
                    <Link key={post._id} href={`/post/${post.slug.current}`} className="block h-full">
                    <SimpleCard title={post.title} url="" description="" tag="" bg="bg-emerald-700" text="text-white"/>
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
        {/* adsfds */}
        
        {/* listing FAQ */}
        <div className="mx-auto bg-white max-w-7xl pb-7">
        <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Åpen kildekode og Creative Commons"/>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                  {faq.map((faqa) => (  
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
        <SectionHeader title="Eksterne ressurser" subTitle="Utvalgte veiledere, dokumenter og kunnskapskilder"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
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

          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling." />
        </div>          
        {/* asdfa */}
        <Footer /> 
      </div>
      </div>
    </main>
  )
}
