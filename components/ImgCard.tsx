import Image from "next/image";

interface Props {
  url: string;
  img: string;
  description: string;
  title: string;

}

export function ImgCard({ img, description, title }: Props ) {
  return (
    <div className="border text-wihte border-gray-200 rounded-lg group cursor-pointer overflow-hidden">
      <Image className="h-40 lg:h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={img} alt={title} width={640} height={360} />
        <div className="flex justify-between pt-5 pb-5 pl-3 lg:pl-5 bg-slate-700">
          <div>
            <p className="text-sm lg:text-lg font-bold text-white">{title}</p>
            <p className="text-xs text-white">
              {description}
            </p>
          </div>
        </div>
    </div>
  )
}
