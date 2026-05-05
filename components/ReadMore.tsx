
type Props = {
    title: string;
    url: string;
}

export function ReadMore({title, url}: Props) {
  return (
    <div>
        <div>
            <h3 className="text-center text-base text-emerald-900 pb-2 hover:text-emerald-700"> <a href={url} title="Read more">{title} &rarr; </a></h3>
        </div>
    </div>
  )
}
