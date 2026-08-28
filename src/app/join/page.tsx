import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Users, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Join & Participate | ${siteConfig.fullName}`,
  description: "Get involved, contribute to open archives, or contact the Hmar Heritage Foundation.",
};

export default function JoinPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Users className="w-4 h-4 text-[#9E1B24]" />
          <span>Community Participation & Contact</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Join the Foundation
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          The Hmar Heritage Foundation welcomes writers, educators, students, software developers, and community elders who wish to assist in digital book preservation, Wikipedia Incubator drafting, and language standardization.
        </p>
      </section>

      {/* 2. Logical Flow Section: How You Can Participate */}
      <div className="space-y-10 text-slate-800 leading-relaxed text-base font-sans border-b border-slate-200 pb-12">
        <section className="space-y-5">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            How You Can Participate
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              Whether you can contribute physical books for scanning, assist in verifying Hmar grammar for Wikipedia lead sections, review technical term definitions, or help build open-source tools, your involvement directly strengthens our language online.
            </p>

            <p>
              In short, you do not have to be a scholar, a professional linguist, a published author, or a senior software engineer to contribute. Truthfully, we don&apos;t know what we are doing either—none of us started out with all the answers, and we are learning and figuring out these digital tools together as an open community. If you feel unsure or worry about making mistakes, do not be intimidated; every small effort helps us learn together.
            </p>

            <p>
              We maintain an open, low-barrier policy for all contributors. Every volunteer who assists in scanning, editing, or dataset cataloging gets full public acknowledgment in our Foundation directory. For a detailed step-by-step participation framework across specific projects, read our{" "}
              <Link
                href="/get-involved"
                className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
              >
                <span>self-guided contributor guide</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>
          </div>
        </section>

        {/* Direct Email Desk Section */}
        <section className="space-y-4 bg-[#FAF9F6] p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B24] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#9E1B24]" />
            <span>Direct Email Desk</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-slate-900">
            Get in Touch
          </h3>

          <p className="text-xs text-slate-700 leading-relaxed">
            To get involved, suggest a physical book for scanning, or join as an operational volunteer, send a direct email to our team:
          </p>

          <div className="pt-2 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-bold">Primary Contact:</span>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=Joining Hmar Heritage Foundation`}
                className="font-bold text-slate-900 hover:text-blue-700 transition-colors"
              >
                {siteConfig.contactEmail}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-bold">Secondary Contact:</span>
              <a
                href={`mailto:${siteConfig.secondaryEmail}?subject=Joining Hmar Heritage Foundation`}
                className="font-bold text-slate-900 hover:text-blue-700 transition-colors"
              >
                {siteConfig.secondaryEmail}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Backlink */}
      <div className="pt-2 text-xs font-semibold text-slate-500">
        <Link
          href="/people"
          className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-700 transition-colors"
        >
          <span>Meet the Executive Team & Operational Leads</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
