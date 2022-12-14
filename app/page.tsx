import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">
          Welcome to Asher & Ashraf Superstore!
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Next.js" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
