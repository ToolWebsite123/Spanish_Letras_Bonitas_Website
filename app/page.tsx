import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      {/* Top Site Navigation Bar */}
      <NavBar />

      <main className="flex-1 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <header className="text-center pt-2 pb-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Bonitas
            </h1>
          </header>

          <Converter />
        </div>
      </main>
    </div>
  );
}
