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
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[#FAFAF8]/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
        >
          {/* Dual-color logo mark: Blue & Orange */}
          <span className="flex h-4 w-4 rounded overflow-hidden">
            <span className="w-2.5 h-full bg-blue-600" />
            <span className="w-1.5 h-full bg-orange-500" />
          </span>
          <span>{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 bg-white border border-slate-200 rounded-full px-2 py-1 shadow-sm">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-sm transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
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
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-slate-100">
              <a
                href={`mailto:${profile.email}`}
                className="block text-center px-4 py-2 text-sm font-semibold rounded-md bg-orange-600 text-white"
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
