'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-start justify-center bg-transparent">
      <div className="w-full px-6 md:px-10">
        <div className="glass-card neon-border rounded-b-2xl rounded-t-none w-full md:min-h-40 md:flex md:items-center">
          <nav className="w-full max-w-[1920px] px-6 md:px-10 py-6 md:py-8">
        {/* Desktop - Centered Layout */}
        <div className="hidden md:flex items-center justify-center gap-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-light tracking-wider opacity-90 hover:opacity-100 transition-opacity neon-text">
              CHEN
            </div>
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase relative group"
          >
            <span className="neon-text-pink">ABOUT</span>
            <span className="absolute bottom-0 left-0 w-0 h-px" style={{ backgroundColor: 'var(--accent-pink)' }}></span>
            <span className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: 'var(--accent-pink)', boxShadow: '0 0 8px rgba(240,63,222,0.7)' }}></span>
          </Link>

          {/* Theme toggle removed */}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-white text-2xl font-light tracking-wider">
              CHEN
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Menu Button */}
            <button
              className="text-white neon-border rounded-md p-2 hover:shadow-[0_0_18px_rgba(40,217,239,0.45)] transition-shadow"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-6">
            <Link
              href="/about"
              className="block text-white/80 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase neon-text-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </div>
        )}
          </nav>
        </div>
      </div>
    </header>
  );
}

