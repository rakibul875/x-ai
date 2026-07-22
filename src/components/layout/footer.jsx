import { Hexagon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#09090B] py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-zinc-50 font-bold tracking-tighter">
          <Hexagon className="w-5 h-5 text-zinc-500" />
          Xai
        </div>
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Xai Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Twitter</Link>
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">GitHub</Link>
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Discord</Link>
        </div>
      </div>
    </footer>
  );
}
