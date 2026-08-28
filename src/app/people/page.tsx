import Link from "next/link";
import { siteConfig } from "@/config/site";
import { UserCheck, ArrowRight, Code2, Compass, BookOpen, UserPlus, ExternalLink } from "lucide-react";

export const metadata = {
  title: `People & Advisory Council | ${siteConfig.fullName}`,
  description: "Meet the executive team, core operational leads, Advisory Council, and community contributors behind the Hmar Heritage Foundation.",
};

export default function PeoplePage() {
  const coreTeamMembers = [
    {
      name: "Donal Muolhoi",
      initials: "DM",
      role: "Founder, Project Lead & Data Architect",
      type: "Executive Lead",
      status: "Active",
      icon: Code2,
      blogUrl: "https://thingpuisen.pages.dev",
      responsibilities: "Foundation administration, website infrastructure, dataset formatting in i18n JSON, PO, and XLIFF formats, and managing Hugging Face dataset mirrors.",
    },
    {
      name: "Ephriam Pena",
      initials: "EP",
      role: "Field Operator & Collector",
      type: "Operational Lead",
      status: "Active",
      icon: Compass,
      responsibilities: "Collecting physical books, rare manuscripts, folk songbooks, and oral history recordings from villages, elders, and personal libraries.",
    },
    {
      name: "Stephen Huolngo",
      initials: "SH",
      role: "Digitization Specialist",
      type: "Operational Lead",
      status: "Active",
      icon: BookOpen,
      responsibilities: "Operating high-resolution overhead book scanners and archival cameras, processing page scans into clean PDFs for the digital library.",
    },
    {
      name: "Editorial & Quality Control Lead",
      initials: "?",
      role: "Grammar & Wikipedia Incubator Lead",
      type: "Operational Lead",
      status: "Open Position",
      icon: UserPlus,
      responsibilities: "Verifying Hmar spelling and orthography, authoring 10 weekly lead-section articles on Wikimedia Incubator, and reviewing dictionary entries.",
    },
  ];

  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-[#9E1B24]" />
          <span>People & Governance</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Executive Team & Advisory Council
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          The Hmar Heritage Foundation operates through a structured 4-role executive team, an Advisory Council of community elders and scholars in formation, and open volunteer contributors.
        </p>
      </section>

      {/* 2. Executive Team Members Section (4 Core Roles) */}
      <section className="space-y-8 border-b border-slate-200 pb-10">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B24] block">
            Category I · Operational Leadership
          </span>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
            Executive Team & Operational Leads
          </h2>
        </div>

        <div className="space-y-8">
          {coreTeamMembers.map((member, idx) => {
            const IconComp = member.icon;

            return (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-5 border-b border-slate-100 pb-6 last:border-0">
                {/* Styled Monogram & Role Icon Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-[#0B132B] border border-slate-800 flex flex-col items-center justify-center shrink-0 text-white relative shadow-md select-none">
                  <span className="font-mono text-sm font-bold tracking-widest text-slate-100">{member.initials}</span>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#9E1B24] text-white flex items-center justify-center border border-slate-900">
                    <IconComp className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        member.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#9E1B24]">
                    {member.role}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-sans pt-1">
                    {member.responsibilities}
                  </p>

                  {member.blogUrl && (
                    <div className="pt-1 text-xs text-slate-600 font-sans flex items-center gap-1">
                      <span>read founder's personal blog:</span>
                      <a
                        href={member.blogUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                      >
                        <span className="hover:underline">{member.blogUrl.replace("https://", "")}</span>
                        <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Advisory Council Section */}
      <section className="space-y-6 pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
            Category II · Institutional & Advisory Governance
          </span>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
            Advisory Council & Scholar Network · In Formation
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 font-sans leading-relaxed">
          <p>
            The Foundation is forming an Advisory Council comprising respected community elders, educators, linguistic scholars, and institutional representatives to guide orthographic standards, dictionary consensus, and cultural preservation.
          </p>
          <p>
            As formal outreach and consultations proceed in 2026, confirmed advisory members and partner liaisons will be listed here upon official endorsement.
          </p>
        </div>
      </section>

      {/* 4. Join Callout */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
        <span>Interested in serving on the Executive Team or Advisory Council?</span>
        <Link
          href="/join"
          className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-700 transition-colors"
        >
          <span>connect with the foundation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
