import { LayoutProps } from "$fresh/server.ts";
import IconBrandGithubFilled from "icons/brand-github.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div>
      <header className="bg-black text-white italic p-2">
        <h1 className="font-bold text(3xl white) m-1">
          Combination<span className="text-red-500">s</span>
        </h1>
        <p className="m-1">
          This app will find all the combinations of
          <span className="text(red-500 2xl) mx-1">n</span>
          non-overlapping numbers from 1 to 9 that sum to
          <span className="text(red-500 2xl) mx-1">x</span>.
        </p>
      </header>

      <Component />

      <footer className="p-2">
        <div className="flex justify-end items-center gap-2">
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
          <a href="https://github.com/daichi-okamura/combinations">
            <IconBrandGithubFilled class="w-8 h-8" />
          </a>
        </div>
      </footer>
    </div>
  );
}
