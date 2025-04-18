import Image from 'next/image';
import { Button } from '../components/Button';

export default function Home(): React.ReactElement {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            variant="primary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            icon={{
              src: '/vercel.svg',
              alt: 'Vercel logomark',
              width: 20,
              height: 20,
            }}
          >
            Deploy now
          </Button>
          <Button
            variant="secondary"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto md:w-[158px]"
          >
            Read our docs
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Button
          variant="secondary"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
          icon={{
            src: '/file.svg',
            alt: 'File icon',
            width: 16,
            height: 16,
          }}
        >
          Learn
        </Button>
        <Button
          variant="secondary"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
          icon={{
            src: '/window.svg',
            alt: 'Window icon',
            width: 16,
            height: 16,
          }}
        >
          Examples
        </Button>
        <Button
          variant="secondary"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
          icon={{
            src: '/globe.svg',
            alt: 'Globe icon',
            width: 16,
            height: 16,
          }}
        >
          Go to nextjs.org →
        </Button>
      </footer>
    </div>
  );
}
