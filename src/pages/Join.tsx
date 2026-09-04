import { Link } from 'react-router-dom';
import {
  Languages,
  Archive,
  Camera,
  BookOpen,
  Globe,
  Keyboard,
  Code,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const roles = [
  {
    icon: Languages,
    title: 'Translators',
    description:
      'Help localize open-source software into Hmar. We use Weblate for collaborative translation. No coding required — just fluency in Hmar and English.',
    commitment: 'Flexible — translate at your own pace',
  },
  {
    icon: Archive,
    title: 'Community Archivists',
    description:
      'Record oral histories, photograph manuscripts, and document cultural materials in your village or region. Training and equipment provided.',
    commitment: 'Field visits, ~4–8 hours per month',
  },
  {
    icon: Camera,
    title: 'Photographers',
    description:
      'Document cultural artifacts, textiles, and community events. If you have a camera and an eye for detail, we need your skills.',
    commitment: 'Project-based',
  },
  {
    icon: BookOpen,
    title: 'Lexicon Contributors',
    description:
      'Add words, definitions, and example sentences to the Hmar Customary Lexicon. Work with elders to document customary terms before they are lost.',
    commitment: 'Flexible — contribute at your own pace',
  },
  {
    icon: Globe,
    title: 'Wikipedia Editors',
    description:
      'Create and improve articles in the Hmar Wikipedia Incubator. We provide training — no prior Wikipedia experience needed.',
    commitment: 'Flexible — edit at your own pace',
  },
  {
    icon: Code,
    title: 'Developers',
    description:
      'Help build and maintain our open-source tools: keyboard layouts, the lexicon API, the digital repository, and data pipelines.',
    commitment: 'Flexible — contribute via GitHub',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Testers',
    description:
      'Test keyboard layouts on your device and report issues. Help us ensure the Hmar keyboard works perfectly on every platform.',
    commitment: 'Ad hoc — test when updates are released',
  },
  {
    icon: Users,
    title: 'Village Coordinators',
    description:
      'Serve as the local contact for Foundation activities in your village. Help organize documentation visits and community engagement.',
    commitment: 'Ongoing — ~2–4 hours per month',
  },
];

const steps = [
  {
    step: '01',
    title: 'Reach Out',
    description:
      'Send us a message expressing your interest. Tell us what you would like to contribute — no formal application needed.',
  },
  {
    step: '02',
    title: 'Get Oriented',
    description:
      'We will connect you with the relevant project steward for a brief orientation and to discuss how you can help.',
  },
  {
    step: '03',
    title: 'Start Contributing',
    description:
      'Begin working at your own pace. We provide training, documentation, and a supportive community of fellow volunteers.',
  },
];

export default function Join() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-crimson-900 text-white py-20 md:py-32">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-up">
            <span className="section-label text-crimson-400">Get Involved</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Join the Foundation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-200 leading-relaxed">
              We are a community of volunteers preserving Hmar heritage. There
              is a role for everyone — you do not need to be a developer,
              a scholar, or a linguist. You just need to care.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Open Roles</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
            How you can help
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Eight ways to contribute. Pick the one that matches your skills and
            interests — or suggest your own.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div key={role.title} className="card card-hover p-6">
              <div className="w-12 h-12 rounded-xl bg-crimson-50 flex items-center justify-center mb-4">
                <role.icon className="text-crimson-700" size={24} />
              </div>
              <h3 className="font-semibold text-lg text-stone-900 mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                {role.description}
              </p>
              <p className="text-xs font-mono text-stone-400">
                {role.commitment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to join */}
      <section className="bg-parchment border-y border-stone-200 py-16 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">The Process</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
              How to join
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="text-5xl font-bold text-crimson-200 mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 text-center">
            What you get as a volunteer
          </h2>
          <div className="space-y-3">
            {[
              'Training and documentation for your role',
              'A supportive community of fellow volunteers',
              'Credit and attribution for all your contributions',
              'Equipment and resources for field work (where applicable)',
              'Direct impact on preserving Hmar heritage for future generations',
              'No commitment minimums — contribute what you can, when you can',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-parchment rounded-lg border border-stone-200"
              >
                <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start?
            </h2>
            <p className="text-stone-300 mb-8">
              Send us an email at{" "}
              <a
                href="mailto:join@hmarheritage.org"
                className="text-crimson-400 link-underline"
              >
                join@hmarheritage.org
              </a>{" "}
              with a brief note about how you would like to contribute. We
              respond within 5 business days.
            </p>
            <a
              href="mailto:join@hmarheritage.org"
              className="inline-flex items-center gap-2 bg-crimson-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-crimson-800 transition-colors"
            >
              Email Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
