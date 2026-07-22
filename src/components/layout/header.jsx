import Link from 'next/link';
import { Hexagon } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-50 tracking-tighter hover:opacity-80 transition-opacity">
            <Hexagon className="w-6 h-6 text-cyan-400 fill-cyan-400/20" />
            Xai
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#product" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">Product</Link>
            <Link href="#solutions" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">Solutions</Link>
            <Link href="#docs" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">Docs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#signin" className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors">
            Sign In
          </Link>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
