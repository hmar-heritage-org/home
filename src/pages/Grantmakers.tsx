import { Link } from 'react-router-dom';
import {
  Users,
  Camera,
  HardDrive,
  Mic,
  Server,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const needs = [
  {
    icon: Mic,
    title: 'Oral History Recording Kits',
    description:
      'Portable audio recording kits (recorder, microphones, headphones, storage) for village oral history documentation. Each kit serves multiple villages.',
  },
  {
    icon: Camera,
    title: 'Photography Equipment',
    description:
      'DSLR cameras, macro lenses, and lighting for artifact documentation and cultural photography. Used by the Artifacts Stewardship team.',
  },
  {
    icon: HardDrive,
    title: 'Storage & Backup',
    description:
      'Redundant external storage drives and cloud backup subscriptions for the digital repository to ensure no community data is lost.',
  },
  {
    icon: Server,
    title: 'Repository Hosting',
    description:
      'Web hosting and domain infrastructure for the public-facing digital archive and API, including CDN and security protocols.',
  },
  {
    icon: BookOpen,
    title: 'Reference Materials',
    description:
      'Acquisition of out-of-print ethnographic texts and grammars for the reference library used by the Lexicon and Archival teams.',
  },
  {
    icon: Users,
    title: 'Travel & Community Visits',
    description:
      'Transportation and modest stipends for community archivists visiting remote villages for documentation work.',
  },
];

const principles = [
  'Zero paid staff: all labor is volunteer',
  'No overhead: 100% of funds go to equipment and direct project costs',
  'Full financial transparency: all spending is published quarterly',
  'Community consent: no documentation without custodian approval',
  'Open access: all outputs are published under open licenses',
];

export default function Grantmakers() {
  return (
    <div>
      <PageHeader
        label="For Grantmakers & Donors"
        title="Institutional & Financial Overview"
        subtitle="Transparent documentation of our scope, structure, equipment needs, and non-academic community documentation goals. We are not an institution: we are a community doing the work ourselves."
        backgroundImage="/hmar_bamboo_hut.jpg"
      />

      <section className="container-page py-16 md:py-24">
        <div className="max-w-prose mx-auto">
          <div className="prose-institutional">
            <h2>Who We Are</h2>
            <p>
              The Hmar Heritage Foundation is a volunteer-run, community-driven
              organization. We have no office, no paid staff, and no institutional
              affiliation. Our stewards are community members (teachers,
              software developers, photographers, librarians, and students)
              who donate their time to preserve Hmar heritage.
            </p>
            <p>
              We are not an academic research project. Our goal is not to produce
              scholarly publications but to build practical, usable, open digital
              infrastructure for the Hmar language and culture. We digitize oral
              histories so grandmothers can hear their own mothers sing. We build
              keyboards so children can type in their language. We create a
              dictionary so a word doesn't disappear when the last person who
              knows it passes away.
            </p>

            <h2>What We Are Asking For</h2>
            <p>
              We seek modest, targeted support for equipment and direct project
              costs. We do not seek funding for salaries, overhead, or
              institutional infrastructure. Our needs are concrete and
              itemized below.
            </p>
          </div>

          {/* Clean Needs grid without badges/costs */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {needs.map((need) => (
              <div key={need.title} className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs hover:border-[#064e3b]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <need.icon className="text-[#064e3b]" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {need.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {need.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose-institutional mt-12">
            <h2>Operating Principles</h2>
            <p>
              The following principles govern all Foundation activities and
              funding relationships:
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 p-4 bg-parchment rounded-lg border border-stone-200"
              >
                <CheckCircle2 size={18} className="text-emerald-700 flex-shrink-0" />
                <span className="text-stone-700 font-medium">{principle}</span>
              </div>
            ))}
          </div>

          <div className="prose-institutional mt-12">
            <h2>What Your Support Enables</h2>
            <p>
              An oral history kit allows a community archivist to record,
              preserve, and publish the songs and stories of multiple villages,
              material that would otherwise be lost within a generation. Dedicated
              photography equipment enables the documentation of hundreds of cultural
              artifacts before they deteriorate or are lost. Annual hosting and
              storage keep the archive online and accessible to anyone,
              anywhere, for free.
            </p>
            <p>
              We are happy to provide detailed project plans, milestone
              schedules, and quarterly impact reports to any prospective partner.
              We welcome site visits and direct conversations with our community
              stewards.
            </p>

            <h2>Contact</h2>
            <p>
              For partnership inquiries, grant discussions, or equipment
              donations, please reach out via email at{" "}
              <a href="mailto:donalmuolhoi@gmail.com" className="text-[#064e3b] underline font-medium">
                donalmuolhoi@gmail.com
              </a>
              . We respond to all community inquiries promptly.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-stone-900 rounded-2xl text-center text-white">
            <h3 className="text-xl font-semibold mb-3">
              Ready to support Hmar heritage preservation?
            </h3>
            <p className="text-stone-300 mb-6 max-w-xl mx-auto text-sm">
              Every contribution (whether equipment, technical support, or volunteer
              time) directly enables community documentation work.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-[#064e3b] hover:bg-[#04392b] text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
