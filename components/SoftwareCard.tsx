import type { SoftwareItem } from "@/data/software";
import { getSoftwareCategories } from "@/data/software";
import Image from "next/image";

type Props = {
  software: SoftwareItem;
  variant?: "visual" | "simple";
};

export function SoftwareCard({ software, variant = "visual" }: Props) {
  const categories = getSoftwareCategories(software);

  if (variant === "simple") {
    return (
      <a
        href={software.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="h-full overflow-hidden rounded-lg border border-emerald-700/20 bg-white text-slate-700 transition-colors hover:text-emerald-700">
          <div className="p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-left text-lg font-medium text-emerald-900">
              {software.title}
            </p>
            <p className="pt-2 text-sm">{software.description}</p>
          </div>
          <p className="pb-3 pr-4 pt-5 text-right text-lg">&rarr;</p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={software.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full min-w-[250px] sm:min-w-[280px]"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-emerald-50">
          {software.image ? (
            <Image
              src={software.image}
              alt={`${software.title} illustrasjon`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 280px"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-500">
              Ingen illustrasjon
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="mb-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
            {categories[0]}
          </p>
          <p className="text-left text-lg font-semibold text-emerald-950">
            {software.title}
          </p>
          <p className="pt-2 text-sm text-slate-700">{software.description}</p>
        </div>
        <p className="pb-4 pr-4 text-right text-lg text-emerald-700">&rarr;</p>
      </div>
    </a>
  );
}
