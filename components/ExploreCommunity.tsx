const githubUrl = "https://github.com/christer-io/goopen-no";
const mastodonUrl = "https://mastodon.social/@goopen/";
const signalGroupUrl =
  "https://signal.group/#CjQKIErN9ao7LN4IzRSVPvMBs3kBRIB6HpB5bW6AA4Ckq5-oEhC8wAL6suPCDdFPfnN1JyBz";

function GitHubLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-16 w-16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.86 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.9c-2.78.62-3.36-1.22-3.36-1.22-.46-1.18-1.1-1.5-1.1-1.5-.9-.63.08-.62.08-.62 1 .08 1.52 1.06 1.52 1.06.88 1.54 2.3 1.1 2.86.84.08-.66.34-1.1.62-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.04 1.02-2.76-.1-.26-.44-1.3.1-2.72 0 0 .84-.28 2.76 1.05A9.34 9.34 0 0 1 12 6.9c.86 0 1.72.12 2.52.36 1.92-1.33 2.76-1.05 2.76-1.05.54 1.42.2 2.46.1 2.72.64.72 1.02 1.64 1.02 2.76 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9v2.8c0 .28.18.6.7.5A10.14 10.14 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function MastodonLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-16 w-16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill="#6364FF" />
      <path
        d="M36.5 18.05c0-6.66-4.36-8.62-4.36-8.62-2.2-1.01-5.98-1.44-8.09-1.47h-.1c-2.11.03-5.89.46-8.09 1.47 0 0-4.36 1.96-4.36 8.62 0 1.53-.03 3.35.02 5.28.16 6.48 1.2 12.86 7.2 14.44 2.76.73 5.13.88 7.04.78 3.47-.19 5.42-1.24 5.42-1.24l-.12-2.52s-2.48.79-5.26.69c-2.75-.1-5.65-.3-6.1-3.72a7.13 7.13 0 0 1-.06-.96s2.7.66 6.12.82c2.1.1 4.06-.12 6.06-.36 3.84-.46 7.19-2.83 7.6-4.99.64-3.4.58-8.22.58-8.22Z"
        fill="white"
      />
      <path
        d="M31.1 18.7v8.05h-3.2v-7.81c0-1.65-.7-2.49-2.1-2.49-1.55 0-2.32 1-2.32 2.98v4.28h-3.18v-4.28c0-1.98-.78-2.98-2.33-2.98-1.4 0-2.1.84-2.1 2.49v7.81h-3.2V18.7c0-1.65.42-2.96 1.26-3.93.88-.97 2.02-1.47 3.44-1.47 1.64 0 2.88.63 3.7 1.89l.8 1.35.8-1.35c.82-1.26 2.06-1.89 3.7-1.89 1.42 0 2.56.5 3.44 1.47.84.97 1.26 2.28 1.26 3.93Z"
        fill="#6364FF"
      />
    </svg>
  );
}

function SignalLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-16 w-16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="18" fill="#3A76F0" />
      <path
        d="M24 9.5c8 0 14.5 5.72 14.5 12.78 0 3.52-1.6 6.72-4.18 9.06l.86 5.66-5.6-1.74A16.24 16.24 0 0 1 24 37.06c-8 0-14.5-5.72-14.5-12.78S16 9.5 24 9.5Z"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M19.2 24.68c.96 1.24 2.3 2.18 3.86 2.8 1.6.62 3.2.76 4.86.44"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ExploreCommunity() {
  return (
    <section className="mx-auto max-w-7xl bg-[#f7f6f1] px-4 py-16 text-center md:py-20">
      <h2 className="text-3xl font-bold text-emerald-700 md:text-4xl">
        Bidra til felleskapet 
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-emerald-950 md:text-xl">
        Spør en ekspert, eller bidra. Du trenger ikke være utvikler for å bidra.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex min-h-36 w-full max-w-xs flex-col items-center justify-center rounded-lg text-emerald-950 transition-colors hover:bg-white/70 hover:text-emerald-700"
        >
          <GitHubLogo />
          <span className="mt-4 text-3xl font-bold">GitHub</span>
        </a>

        <a
          href={signalGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex min-h-36 w-full max-w-xs flex-col items-center justify-center rounded-lg text-emerald-950 transition-colors hover:bg-white/70 hover:text-emerald-700"
        >
          <SignalLogo />
          <span className="mt-4 text-3xl font-bold">Delta i diskusjonen</span>
        </a>

        <a
          href={mastodonUrl}
          target="_blank"
          rel="me noopener noreferrer"
          className="mx-auto flex min-h-36 w-full max-w-xs flex-col items-center justify-center rounded-lg text-emerald-950 transition-colors hover:bg-white/70 hover:text-emerald-700"
        >
          <MastodonLogo />
          <span className="mt-4 text-3xl font-bold">Følg på Mastodon</span>
        </a>
      </div>
    </section>
  );
}
