import { useForm, ValidationError } from '@formspree/react';
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
  AlertCircle,
  Loader2,
  Send,
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
  const [state, handleSubmit] = useForm('xwlpzwrl');

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
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to start?
              </h2>
              <p className="text-stone-300">
                Tell us how you would like to contribute. We review every note and respond within 5 business days.
              </p>
            </div>

            {state.succeeded ? (
              <div className="bg-stone-800/90 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. We have received your note and will be in touch with you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-stone-800/90 border border-stone-700/80 rounded-2xl p-6 md:p-8 space-y-5 shadow-2xl">
                {state.errors && (
                  <div className="bg-red-950/50 border border-red-500/40 rounded-xl p-4 flex items-start gap-3 text-red-200 text-sm">
                    <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-300">Submission error</p>
                      <p className="text-red-200/90 mt-0.5">Please check your inputs and try again.</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-200 mb-1.5">
                    Your Name <span className="text-crimson-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Lalramlien"
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/50 focus:border-crimson-500 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-200 mb-1.5">
                    Email Address <span className="text-crimson-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/50 focus:border-crimson-500 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-200 mb-1.5">
                    Phone Number <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/50 focus:border-crimson-500 transition-colors"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-stone-200 mb-1.5">
                    Area of Interest / Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    defaultValue="Translators"
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/50 focus:border-crimson-500 transition-colors"
                  >
                    <option value="Translators">Translators (Weblate localization)</option>
                    <option value="Community Archivists">Community Archivists (Oral history & manuscripts)</option>
                    <option value="Photographers">Photographers (Cultural artifacts & events)</option>
                    <option value="Lexicon Contributors">Lexicon Contributors (Customary terms & words)</option>
                    <option value="Wikipedia Editors">Wikipedia Editors (Hmar Wikipedia Incubator)</option>
                    <option value="Developers">Developers (Open-source tools & pipelines)</option>
                    <option value="Keyboard Testers">Keyboard Testers (Layout & input testing)</option>
                    <option value="General Volunteer / Other">General Volunteer / Other</option>
                  </select>
                  <ValidationError prefix="Role" field="role" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-200 mb-1.5">
                    Message / Note <span className="text-crimson-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us a bit about your background, what village/region you're from, or how you'd like to get involved..."
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500/50 focus:border-crimson-500 transition-colors resize-y"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-crimson-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-crimson-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md active:scale-[0.99]"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-stone-400 pt-2">
                  Prefer direct email? Send a message to{" "}
                  <a
                    href="mailto:donalmuolhoi@gmail.com"
                    className="text-crimson-400 hover:underline"
                  >
                    donalmuolhoi@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
