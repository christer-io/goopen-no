import { Header } from "./Header";
import Link from "next/link";

export function NotFound() {
  return (
    <div>
      <Header />
      <section className="bg-white dark:bg-gray-200">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-emerald-900 dark:text-emerald-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Oopps, noe gikk galt!.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Beklager, vi finner ikke siden.{" "}
            </p>
            <Link
              href="/"
              className="inline-flex text-white bg-emerald-800 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-emerald-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
