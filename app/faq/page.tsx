import { fetchFAQ } from "@/app/actions";
import { SectionHeader } from "@/components/SectionHeader";
import { Header } from "@/components/Header";
import { Footer } from '@/components/Footer';
import { BannerSmall } from '@/components/BannerSmall';
import { FaqExplorer } from "@/components/FaqExplorer";

export default async function Faq() {

  const faq = await fetchFAQ();

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       <div className=''>
        <div className="">
          <Header />
        
      <div className="mx-auto bg-white max-w-7xl pb-7 pt-10">
       <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Åpen kildekode og Creative Commons"/>
          <FaqExplorer faq={faq} />
        </div>  
          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling!" />
        </div>          
        <Footer />
      </div>
    </main>
  )
}
