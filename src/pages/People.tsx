import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Users, BookOpen, UserCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { people } from '@/data/content';

export default function People() {
  return (
    <div>
      <PageHeader
        label="People & Governance"
        title="Operational Leads & Community Stewards"
        subtitle="The volunteer team behind the Foundation. We are developers, archivists, field operators, and community members dedicated to open language preservation."
      />

      {/* Operational Team grid */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Operational Team</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
            Project Leads & Roles
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Each steward oversees specific operational responsibilities. All work is volunteer-driven with zero paid staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {people.map((person) => {
            const isOpenPosition = person.name.includes('Open Position');
            return (
              <div
                key={person.name}
                className={`card p-6 border transition-all ${
                  isOpenPosition
                    ? 'bg-amber-50/50 border-amber-200/80'
                    : 'bg-white border-stone-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-base shadow-xs ${
                      isOpenPosition
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-[#064e3b] text-white'
                    }`}
                  >
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">
                      {person.name}
                    </h3>
                    <p className={`text-xs font-mono font-semibold ${isOpenPosition ? 'text-amber-800' : 'text-emerald-800'}`}>
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-mono text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Role Responsibilities
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {person.bio}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-4 font-mono">
                  <MapPin size={14} className="text-stone-400" />
                  {person.location}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                  {person.focus.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisory Council & Scholar Network */}
      <section className="bg-emerald-950 text-emerald-50 py-16 md:py-24 border-y border-emerald-900">
        <div className="container-page max-w-3xl text-center space-y-6">
          <BookOpen className="mx-auto text-emerald-400" size={36} />
          <h2 className="text-3xl font-bold font-serif">
            Advisory Council & Scholar Network
          </h2>
          <p className="text-emerald-200/90 text-base leading-relaxed max-w-2xl mx-auto">
            The Foundation is forming an Advisory Council comprising respected community elders, educators, linguistic scholars, and customary representatives to guide orthographic consensus, dictionary standards, and institutional partnerships.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-700/60 px-4 py-2 rounded-full text-xs font-mono text-emerald-300">
            <UserCheck size={14} /> Status: Advisory Council In Formation
          </div>
        </div>
      </section>

      {/* Community Network & Stats */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Users className="mx-auto mb-4 text-[#064e3b]" size={36} />
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Beyond Operational Leads
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            In addition to project leads, the Foundation relies on a network of community contributors across the Hmar homeland: software translators, village coordinators, oral history storytellers, and proofreaders.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '5+', label: 'Open HF Repositories' },
            { value: '10.2M+', label: 'Structured Records' },
            { value: '0', label: 'Paid Staff (100% Volunteer)' },
            { value: '100%', label: 'Free & Open Access' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-stone-100/60 rounded-xl border border-stone-200">
              <div className="text-2xl md:text-3xl font-bold text-[#064e3b] font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-stone-600 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-16">
        <div className="bg-stone-900 rounded-3xl p-10 md:p-14 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join as a Steward or Volunteer
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            We welcome developers, writers, translators, and language enthusiasts. No technical experience required — just a passion for preserving Hmar heritage.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-[#064e3b] text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-900 transition-colors"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
