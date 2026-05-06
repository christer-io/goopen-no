

type Props = {
  title: string;
  url: string;
  description: string;
  tag: string;
  bg: string;
  text: string;
  iconIndex?: number;
}

const decorativeIcons = [
  // 0: Share network
  <svg key="share" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="48" cy="12" r="6" stroke="currentColor" strokeWidth="3.5"/>
    <circle cx="16" cy="32" r="6" stroke="currentColor" strokeWidth="3.5"/>
    <circle cx="48" cy="52" r="6" stroke="currentColor" strokeWidth="3.5"/>
    <line x1="21.5" y1="28.9" x2="42.5" y2="15.1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="21.5" y1="35.1" x2="42.5" y2="48.9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>,

  // 1: Code </>
  <svg key="code" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polyline points="24,20 10,32 24,44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="40,20 54,32 40,44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="36" y1="16" x2="28" y2="48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>,

  // 2: Globe
  <svg key="globe" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3.5"/>
    <ellipse cx="32" cy="32" rx="11" ry="22" stroke="currentColor" strokeWidth="3.5"/>
    <line x1="10" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="13" y1="22" x2="51" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="13" y1="42" x2="51" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>,

  // 3: Open padlock
  <svg key="unlock" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="12" y="30" width="40" height="26" rx="4" stroke="currentColor" strokeWidth="3.5"/>
    <path d="M20 30V20a12 12 0 0 1 24 0V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="32" cy="43" r="4" stroke="currentColor" strokeWidth="3"/>
  </svg>,

  // 4: Community / people
  <svg key="community" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="14" r="7" stroke="currentColor" strokeWidth="3"/>
    <path d="M16 48c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="52" cy="20" r="5" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M42 44c0-5.5 3.8-10.1 9-11.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="12" cy="20" r="5" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M22 44c0-5.5-3.8-10.1-9-11.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>,

  // 5: Document / license
  <svg key="document" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 8H42L50 16V56H14Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"/>
    <polyline points="42,8 42,16 50,16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <line x1="22" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <line x1="22" y1="44" x2="36" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>,

  // 6: Circular arrow / reuse
  <svg key="recycle" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M54 32a22 22 0 1 1-3.5-12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <polyline points="43,13 50.5,20 58,13" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // 7: Star
  <svg key="star" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="32,8 38.5,24 56,24 43,34.5 47.5,52 32,41.5 16.5,52 21,34.5 8,24 25.5,24" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
  </svg>,

  // 8: Chain link / hyperlink
  <svg key="link" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="24" y1="40" x2="40" y2="24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M28 44l-6 6a10 10 0 0 1-14-14l6-6a10 10 0 0 1 14 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M36 20l6-6a10 10 0 0 1 14 14l-6 6a10 10 0 0 1-14 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>,

  // 9: Infinity / continuous
  <svg key="infinity" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 32C8 20 20 20 32 32C44 44 56 44 56 32C56 20 44 20 32 32C20 44 8 44 8 32Z" stroke="currentColor" strokeWidth="3.5"/>
  </svg>,
];

export function SimpleCard({title, url, description, tag, bg, text, iconIndex}: Props) {
  const icon = iconIndex !== undefined ? decorativeIcons[iconIndex % decorativeIcons.length] : null;

  return (
    <div className={`h-full border ${bg} ${text} border-emerald-700/25 hover:bg-emerald-100 hover:text-emerald-950 rounded-lg group cursor-pointer overflow-hidden flex flex-col justify-between transition-colors relative`}>
      {icon && (
        <div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 opacity-[0.18]">
          {icon}
        </div>
      )}
      <div className="flex justify-between p-3">
        <div className="pr-16">
          <p className="text-lg text-left font-medium">{title}</p>
          <p className="pt-1 text-emerald-800">{tag}</p>
        </div>
      </div>
      <p className="text-lg pt-5 pr-4 pb-3 text-right text-current">&rarr;</p>
    </div>
  )
}
