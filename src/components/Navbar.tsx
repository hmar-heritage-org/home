"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Development Announcement Banner */}
      <div className="bg-[#9E1B24] text-white text-xs font-sans py-2 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="font-bold uppercase tracking-wider font-mono text-2xs bg-white/20 px-2 py-0.5 rounded">Drafting Phase</span>
          <span className="opacity-95">
            This site is actively under development. Content and specifications are being incrementally refined. Please check back later for updates.
          </span>
        </div>
      </div>

      {/* Main Non-Sticky Header */}
      <header className="bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo - Main Title: Hmar Heritage Foundation + Motto */}
            <Link href="/" className="flex flex-col group">
              <span className="font-serif font-bold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-[#9E1B24] transition-colors">
                {siteConfig.fullName}
              </span>
              <span className="text-[11px] font-sans font-medium text-slate-500 tracking-wide italic">
                {siteConfig.motto}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#9E1B24] hover:underline underline-offset-4 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#9E1B24] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#FAF9F6] px-4 pt-2 pb-6 space-y-3">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-800 hover:text-[#9E1B24] hover:bg-slate-100 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
