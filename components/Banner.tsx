import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const bannerImage = "/images/lightbulb-evolution-goopen.webp";

const isExternalUrl = (url = ""): boolean => /^https?:\/\//i.test(url);
const hasText = (value = ""): boolean =>
  typeof value === "string" && value.trim().length > 0;

interface BannerActionLinkProps {
  href: string;
  className: string;
  children: ReactNode;
}

function BannerActionLink({
  href,
  className,
  children,
}: BannerActionLinkProps) {
  if (isExternalUrl(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

interface BannerProps {
  titlePart1: string;
  titlePart2: string;
  buttonLeft?: string;
  buttonLeftUrl?: string;
  buttonRight?: string;
  buttonRightUrl?: string;
}

export function Banner({
  titlePart1,
  titlePart2,
  buttonLeft = "",
  buttonLeftUrl = "",
  buttonRight = "",
  buttonRightUrl = "",
}: BannerProps) {
  const showLeftButton = hasText(buttonLeft) && hasText(buttonLeftUrl);
  const showRightButton = hasText(buttonRight) && hasText(buttonRightUrl);
  const showButtons = showLeftButton || showRightButton;

  return (
    <div className="pb-8">
      <section className="relative isolate overflow-hidden bg-gray-100">
        <Image
          src={bannerImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-white/20" />
        <div className="py-14 px-4 mx-auto max-w-screen-xl text-left lg:py-24 lg:px-12 ">
          <a
            className="hidden sm:inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white/90 rounded-full shadow-sm"
            role="alert"
          >
            <span className="text-xs bg-green-700 rounded-full text-white px-4 py-1.5 mr-3">
              Beta
            </span>{" "}
            <span className="text-sm font-medium">GoOpen.no</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="max-w-3xl mb-4 text-3xl font-extrabold tracking-tight leading-none text-slate-700 md:text-5xl lg:text-7xl">
            {" "}
            <span className="text-emerald-700">{titlePart1}</span>{" "}
            <span className="text-emerald-950">{titlePart2}</span>{" "}
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-normal lg:text-xl text-slate-700">
            GoOpen.no bidrar til informasjon om åpen kildekode, åpne data og delingskultur.
          </p>
          {showButtons && (
            <div className="flex flex-col mb-8 lg:mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              {showLeftButton && (
                <BannerActionLink
                  href={buttonLeftUrl}
                  className="inline-flex border border-emerald-700 justify-center items-center py-3 px-5 text-emerald-950 font-medium text-center bg-white rounded-lg hover:bg-emerald-50 focus:ring-4 focus:bg-emerald-100 "
                >
                  {buttonLeft}
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </BannerActionLink>
              )}
              {showRightButton && (
                <BannerActionLink
                  href={buttonRightUrl}
                  className="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-emerald-950 rounded-lg border border-emerald-700 hover:bg-emerald-50 focus:ring-4 focus:ring-emerald-100 "
                >
                  <SearchIcon className="h-6 w-6 pr-1" />
                  {buttonRight}
                </BannerActionLink>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
