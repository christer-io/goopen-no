


type Props = {
  title: string;
  url: string;
  description: string;
  tag: string;
  bg: string;
  text: string;
}

export function SimpleCard({title, url, description, tag, bg, text}: Props) {

  return (
            
            <div className={`h-full border ${bg} ${text} border-emerald-700/25 hover:bg-emerald-100 hover:text-emerald-950 rounded-lg group cursor-pointer overflow-hidden flex flex-col justify-between transition-colors`}>
                <div className="flex justify-between p-3">
                    <div>
                    <p className="text-lg text-left font-medium">{title}</p> 
                     <p className="pt-1 text-emerald-800">{tag}</p>
                    </div>
                </div>
               <p className="text-lg pt-5 pr-4 pb-3 text-right text-current">&rarr;</p> 
            </div>   
            
  )
}
