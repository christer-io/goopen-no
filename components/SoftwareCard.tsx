import type { SoftwareItem } from "@/data/software";

type Props = {
  software: SoftwareItem;
};

export function SoftwareCard({ software }: Props) {
  return (
    <a
      href={software.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="h-full overflow-hidden rounded-lg border border-emerald-700/20 bg-white text-slate-700 transition-colors hover:text-emerald-700">
        <div className="p-3">
          <p className="mb-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            {software.category}
          </p>
          <p className="text-left text-lg font-medium text-emerald-900">
            {software.title}
          </p>
          <p className="pt-2 text-sm">{software.description}</p>
        </div>
        <p className="pt-5 pr-4 pb-3 text-right text-lg">&rarr;</p>
      </div>
    </a>
  );
}
