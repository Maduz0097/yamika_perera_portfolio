"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/content/profile";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dde1e6] bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-[#263238]"
        >
          {/* Celestial-inspired geometric mark */}
          <span className="flex items-center justify-center w-6 h-6 rounded bg-[#263238] text-white text-xs font-bold">
            Y<span className="text-[#ff7043]">.</span>
          </span>
          <span className="group-hover:text-[#ff7043] transition-colors">{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6 text-sm font-semibold text-[#546e7a]">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors py-1 ${
                      isActive
                        ? "text-[#ff7043] font-bold border-b-2 border-[#ff7043]"
                        : "hover:text-[#263238]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[#ff7043] hover:bg-[#f4511e] text-white transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#263238] hover:bg-[#f2f4f8] rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#dde1e6] bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-1 text-sm font-semibold transition-colors ${
                      isActive ? "text-[#ff7043]" : "text-[#546e7a] hover:text-[#263238]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-[#dde1e6]">
              <a
                href={`mailto:${profile.email}`}
                className="block text-center px-4 py-2 text-sm font-semibold rounded-lg bg-[#ff7043] text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
