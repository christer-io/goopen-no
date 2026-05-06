"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: string;
};

export function MarkdownRenderer({ markdown }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-4xl font-sans my-3 text-emerald-950">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-sans my-3 text-emerald-900">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-sans my-3 text-emerald-900">{children}</h3>,
        p: ({ children }) => <p className="text-l font-sans my-4 text-gray-700">{children}</p>,
        li: ({ children }) => <li className="ml-4 list-disc text-gray-700">{children}</li>,
        img: ({ src, alt }) => {
          const imageSrc = typeof src === "string" ? src : "";
          const isLicenseBadge = imageSrc.includes("/images/cc-license-");
          const isScrewImage = imageSrc.includes("/images/gjenget-mutter-og-skrue-ndla.jpg");

          return (
            <Image
              src={imageSrc}
              alt={alt || ""}
              width={isLicenseBadge ? 420 : 1200}
              height={isLicenseBadge ? 126 : 800}
              sizes={isLicenseBadge ? "420px" : "(min-width: 768px) 768px, 100vw"}
              className={
                isLicenseBadge
                  ? "my-3 h-auto w-full max-w-sm rounded-none shadow-none"
                  : isScrewImage
                    ? "my-8 aspect-[3/1] w-full rounded-lg bg-slate-100 object-contain shadow-sm"
                    : "my-8 aspect-[3/2] w-full rounded-lg object-cover shadow-sm"
              }
            />
          );
        },
        a: ({ href, children }) => (
          <a href={href} className="text-emerald-700 hover:text-emerald-900 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
