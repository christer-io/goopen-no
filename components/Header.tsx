import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export function Header() {
  const navLinks = [
    { href: '/post/introduksjon-til-apne-data', label: 'Åpne data' },
    { href: '/post/apen-kildekode-lisenser', label: 'Åpen kildekode lisenser' },
    { href: '/eksterne-ressurser', label: 'Eksterne ressurser' },
    { href: '/programvare', label: 'Programvare' },
    { href: '/post/kontakt', label: 'Kontakt oss' },
    { href: 'https://opensource.org', label: 'Open Source Initiative' },
  ];

  return (
    <div>
      <header>
        <nav className="border-gray-200 bg-white px-4 py-3 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center">
              <span
                className={`${notoSans.className} self-center whitespace-nowrap text-xl font-medium text-emerald-700`}
              >
                Go
              </span>
              <span
                className={`${notoSans.className} self-center whitespace-nowrap text-xl font-medium text-emerald-950`}
              >
                {' '}
                Open.no
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              <div className="mr-2 px-4 py-2 lg:px-5 lg:py-2.5"></div>
            </div>

            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col gap-1 pt-2 pb-2 font-medium lg:mt-0 lg:flex-row lg:gap-8 lg:pt-0 lg:pb-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded px-3 py-2 text-sm text-emerald-950 transition-colors hover:bg-emerald-50 hover:text-emerald-700 lg:p-0 lg:hover:bg-transparent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
