
type Props = {
  title: string;
  url: string;
  description: string;
  organization: string;
  category: string;
 
}

export function ExternalLink({title, url, description, organization, category}: Props) {

  return (
            
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
            <div className="h-full border text-slate-700 hover:text-emerald-700 border-emerald-700/20 rounded-lg group cursor-pointer overflow-hidden transition-colors">
                <div className="flex justify-between p-3 bg-white">
                    <div>
                      {category && <p className="mb-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">{category}</p>}
                      <p className="text-lg text-left font-medium text-emerald-900">{title}</p> 
                      {organization && <p className="pt-1 text-sm font-medium text-emerald-700">{organization}</p>}
                      {description && <p className="pt-2 text-sm">{description}</p>}
                    </div>
                </div>
               <p className="text-lg pt-5 pr-4 pb-3 text-right">&rarr;</p> 
            </div>   
            </a>
            
  )
}
