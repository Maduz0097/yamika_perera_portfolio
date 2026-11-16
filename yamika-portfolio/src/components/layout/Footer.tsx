import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#dde1e6] bg-[#f2f4f8]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded bg-[#263238] text-white text-[10px] font-bold">
                Y<span className="text-[#ff7043]">.</span>
              </span>
              <p className="text-sm font-bold text-[#263238]">
                {profile.name}
              </p>
            </div>
            <p className="text-xs text-[#546e7a] mt-1">{profile.title}</p>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-[#546e7a]">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#ff7043] transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7043] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7043] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#dde1e6] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#546e7a]">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Technical Product & AI Leadership</span>
        </div>
      </div>
    </footer>
  );
}
