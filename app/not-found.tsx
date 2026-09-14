import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Image src="/logo.png" alt="" width={48} height={48} className="mb-8 h-12 w-12 object-contain" aria-hidden />
      <p className="tag">404</p>
      <h1 className="section-title mt-5 max-w-2xl text-balance">
        Looks like this creative went <span className="text-gradient-gold">off-script.</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
        Let&apos;s get you back to the work.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-none bg-accent px-6 py-3 font-medium tracking-wide text-black transition-colors hover:bg-[#d9b56d]"
        >
          Back to {SITE.name}
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center justify-center gap-2 rounded-none border border-white/20 px-6 py-3 font-medium tracking-wide text-white transition-colors hover:border-accent/60 hover:text-accent"
        >
          View Our Work
        </Link>
      </div>
    </div>
  );
}
