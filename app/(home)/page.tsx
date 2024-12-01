import {
  IconBrandOpenSource,
  IconBrandTypescript,
  IconRocket,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col text-left px-6 sm:px-10 md:px-20 m-10 gap-10">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold w-full max-w-[1200px]">
        A{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          fully featured
        </span>{" "}
        React custom hook library
      </h1>
      <p className="text-sm sm:text-base text-neutral-400 w-full max-w-[900px]">
        Hook Master is a React custom hook library designed to simplify
        development. It offers reusable, performance-optimized hooks with
        TypeScript support, enabling developers to manage state, effects, and
        more effortlessly. With comprehensive documentation and examples, Hook
        Master helps you build faster, cleaner, and scalable applications for
        modern React projects.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex md:flex-col items-start gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md w-fit">
            <IconBrandOpenSource className="w-10 h-10 m-2 p-1 text-white" />
          </div>
          <div>
            <div className="font-medium text-lg">It’s open source</div>
            <div className="text-sm sm:text-base text-neutral-400 w-full max-w-[220px]">
              The source code is always available to you.
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-start gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md w-fit">
            <IconBrandTypescript className="w-10 h-10 m-2 p-1 text-white" />
          </div>
          <div>
            <div className="font-medium text-lg">TypeScript-based</div>
            <div className="text-sm sm:text-base text-neutral-400 w-full max-w-[220px]">
              Build type-safe applications; all hooks export types.
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-start gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md w-fit">
            <IconRocket className="w-10 h-10 m-2 p-1 text-white" />
          </div>
          <div>
            <div className="font-medium text-lg">Use anywhere</div>
            <div className="text-sm sm:text-base text-neutral-400 w-full max-w-[220px]">
              Hooks are supported in React, Next.js, etc.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <Link
          href="/docs"
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-lg md:text-2xl p-4 rounded-xl text-white w-52 text-center"
        >
          Get Started
        </Link>
        <a
          href="https://github.com/Kunalkbhatia/HookMaster"
          className="bg-black text-lg md:text-2xl p-4 rounded-lg text-white w-52 text-center"
        >
          GitHub
        </a>
        <a href="https://www.npmjs.com/package/hook-master-react" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-lg md:text-2xl p-4 rounded-xl text-white w-52 text-center">NPM</a>
      </div>
    </main>
  );
}
